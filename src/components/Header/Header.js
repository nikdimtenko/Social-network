import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return(
        <header className={s.header}>
            <img src='https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png' className={s.logo}/>
            <a href="#">Sing In</a>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ic_account_circle_48px.svg/600px-Ic_account_circle_48px.svg.png"
                 alt="Sing" className={s.singIn}/>


        </header>
    );
}

export default Header;