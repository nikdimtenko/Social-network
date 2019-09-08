import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import notPhotos from '../../img/notPhotos2.png'
import login from '../../img/login.png'
import {getInfo} from "../../redux/authReducer";

class Header extends React.Component {

    componentDidMount() {
        this.props.getInfo();
    }


    render() {
        debugger
        return (
            <div className={s.header}>
                {
                    this.props.isAuth ?
                    <div className={s.myAccount}>
                        <img src={this.props.photos ? this.props.photos : notPhotos}/>
                        <NavLink to='/'>ВЫХОД</NavLink>
                    </div>
                    :
                    <div className={s.myAccount}>
                        <img src={login}/>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        id: state.auth.id,
        photos: state.auth.photos,
        isAuth: state.auth.isAuth
    })
};

export default connect (mapStateToProps, {getInfo})(Header);