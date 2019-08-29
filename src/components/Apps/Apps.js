import React from 'react';
import style from './Apps.module.css';
import {NavLink, Route} from "react-router-dom";
import Calculate from "./Calculate/Calculate";

const Apps = () => {
    return(
        <div>
            <Route exact path={'/apps'} render={() =>
                <div className={style.link}>
                    <div><NavLink to={'/apps/calculate'}>Calculate</NavLink></div>
                    <div><NavLink to={'/apps/lol'}>Lol</NavLink></div>
                </div>}/>
            <Route path={'/apps/calculate'} render={() => <Calculate/> }/>
            <Route path={'/apps/lol'} render={() => <div>LOOOOL</div>}/>
        </div>
    )
}

export default Apps;