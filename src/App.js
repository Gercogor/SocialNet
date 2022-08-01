import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import './App.css';
import Dialogs from "./components/Dialog/Dialogs";
import Messenger from "./components/Message/Message";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Loader from "./components/Loader/Loader";


function App(props) {

    useEffect(() => {
        props.initializeApp();
    }, [])

    return (
        <div className="app-wrapper">
            {
                props.isInitializing
                ? <Loader/>
                :<BrowserRouter>
                        <Header/>
                        <Nav/>
                        <main className='app-wrapper-content'>
                            <Routes>
                                <Route path="/" element={<Navigate to={props.id?`/profile/`+props.id:`/login`}/>}/>
                                <Route path="/profile" element={<Navigate to={props.id?`/profile/`+props.id:`/login`}/>}/>
                                <Route path="/profile/:id" element={<ProfileContainer/>}/>
                                <Route path="/profile/null" element={<Navigate to={props.id?`/profile/`+props.id:`/login`}/>}/>
                                <Route path="/dialogs" element={<Dialogs/>}/>
                                <Route path="/dialogs/:id" element={<Messenger/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/login" element={props.id?<Navigate to={`/profile`}/>:<Login/>}/>
                            </Routes>
                        </main>
                    </BrowserRouter>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    isInitializing: state.app.isInitializing
})

export default connect(mapStateToProps, {initializeApp})(App);
