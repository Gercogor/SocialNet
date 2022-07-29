import React from 'react';
import {Navigate} from "react-router-dom"
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthHoc = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Navigate to={`/login`} replace/>
            return (
                <Component {...this.props} />
            )
        }
    }

    let connectedWithAuthHoc = connect(mapStateToProps,{})(RedirectComponent)

    return connectedWithAuthHoc;

};

