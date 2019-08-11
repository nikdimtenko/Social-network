import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs dialogPage={props.state.dialogPage}
                                                                updateTextMessage={props.updateTextMessage}
                                                                addMessage={props.addMessage}/>}/>
                    <Route path='/profile' render={()=><Profile profilePage={props.state.profilePage}
                                                                addPost={props.addPost}
                                                                updateNewPostText={props.updateNewPostText} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
