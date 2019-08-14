import React from 'react'
import {Borderblock, Buttons, Inputs, Wrapper} from "./styleComponend";
import {Redirect} from "react-router-dom";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Autorization',
            email: 'Dima@mail.ru',
            password: '1',
            activeEmail: '',
            activePassword: '1',
            redirect: ''
        }
         }

    goToProfile = () => {
        if (this.state.password === this.state.activePassword) {
            this.state.redirect = < Redirect to='/social/profile' />;
        } else {
             alert('error');
        }

    }

    render() {

        // const {activeEmail, activePassword, password, email} = this.state
        return (
            <Wrapper>
                {this.state.redirect}
                {this.state.text}
                <Borderblock>
                    <Inputs
                        type={'text'}
                        placeholder={'Логин'}
                    />
                    <Inputs
                        placeholder={'Password'}
                        type={'Пароль'}
                    />
                    <Buttons onClick={this.goToProfile}>
                        Войти
                    </Buttons>
                </Borderblock>
            </Wrapper>


        )
    }
}

export default SignIn