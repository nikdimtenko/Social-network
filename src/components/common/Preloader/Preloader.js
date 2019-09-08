import React from 'react';
import style from "./Preloader.module.css";
import loader from "../../../img/loader.gif";

const Preloader = (props) => {
        return (
            <div className={style.loaderContainer}>
                <img className={style.loader} src={loader}/>
            </div>
        )
    };

export default Preloader;