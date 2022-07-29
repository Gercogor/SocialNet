import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, setUserProfileThunk, updateStatusThunk} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {withAuthHoc} from "../hoc/withAuthHoc";
import {compose} from "redux";

// class ProfileContainer extends React.Component {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.id}`)
//             .then(response => {
//                 this.props.setUserProfile(response.data);
//             })
//     }
//
//     render() {
//         let rete = useParams();
//         console.log(rete);
//         return (
//             <Profile {...this.props} profile={this.props.profile}/>
//         )
//     }
// }
// withRouters отсутствует в реакт роутер v6, переписал на функциональный компонент


const ProfileContainer = (props) => {

    let {id} = useParams();

    useEffect(() => {
        props.setUserProfileThunk(id);
        props.getStatusThunk(id);
    }, [id])




    return (
        <Profile {...props} profile={props.profile} updateStatus={props.updateStatusThunk}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    id: state.auth.id,
})

// let hocProfile = withAuthHoc(ProfileContainer)
// export default connect(mapStateToProps, {setUserProfileThunk, getStatusThunk, updateStatusThunk})(ProfileContainer);

export default compose(
    connect(mapStateToProps, {setUserProfileThunk, getStatusThunk, updateStatusThunk}),
    // withAuthHoc
)(ProfileContainer)