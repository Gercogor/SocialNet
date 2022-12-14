import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from './UserAPI.module.css'
import Loader from "../Loader/Loader";
import ReactPaginate from "react-paginate";

class UsersAPI extends React.Component {

    constructor(props) {
        super(props);
    }

    onPageChanged = (event) => {
        let page  = event.selected+1
        this.props.setPage(page);
        this.props.getUsersThunkCreator(page, this.props.pageSize);
    }

    onUserPerPageChanged = (event) => {
        this.props.setPageSize(event.target.value);
        this.props.getUsersThunkCreator(this.props.currentPage, event.target.value);
    }


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        return (
            <>
                <div className={styles.pagesList}>
                    <ReactPaginate
                        previousLabel={"<"}
                        previousClassName={styles.prevBtn}
                        nextLabel={">"}
                        nextClassName={styles.nextBtn}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pagesCount}
                        pageClassName={styles.page}
                        pageLinkClassName={styles.pageLink}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={this.onPageChanged}
                        containerClassName={styles.pagination}
                        subContainerClassName={"pages"}
                        activeLinkClassName={styles.selectedPage}
                    />
                    <div className={styles.countPerPage}>
                        <p>Users per page</p>
                        <select
                            defaultValue={"5"}
                            onChange={this.onUserPerPageChanged}
                        >
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                {
                    this.props.isFetching
                        ? <Loader/>
                        :
                        <div style={{width: "100%"}}>
                            {
                                this.props.users.map(user =>
                                    <UserItem
                                        user={user} key={user.id}
                                        id={user.id}
                                        isFollowingProgress={this.props.isFollowingProgress}
                                        followThunk={this.props.followThunk}
                                    />
                                )
                            }
                        </div>
                }
            </>

        )
    }
}

export default UsersAPI;