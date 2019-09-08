import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/findUsers/UsersContainer";
import Apps from "./components/Apps/Apps";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' component={ProfileContainer}/>
                <Route path='/dialogs' component={DialogsContainer}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/setting' component={Setting}/>
                <Route path='/find_users' component={UsersContainer}/>
                <Route path='/apps' component={Apps}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
