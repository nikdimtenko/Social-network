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
import SignIn from "./components/sigIn/signIn";



const Navigation = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path="/" exact render={() => <SignIn />}/>*/}
                <Route path='/social/profile' render={()=><ProfileContainer store={props.store}/>}/>
                <Route path='/social/dialogs' render={()=><DialogsContainer store={props.store}/>}/>
                <Route path='/social/news' component={News}/>
                <Route path='/social/music' component={Music}/>
                <Route path='/social/setting' component={Setting}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Navigation;
