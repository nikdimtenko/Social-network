import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className={s.header}>
            {/*<img src='https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png' className={s.logo}/>*/}
            <div >
                <NavLink to='/' >ВЫХОД</NavLink>
            </div>
            {/*<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ic_account_circle_48px.svg/600px-Ic_account_circle_48px.svg.png"*/}
            {/*     alt="Sing" className={s.singIn}/>*/}


        </div>
    );
}

export default Header;