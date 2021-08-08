import React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import Button from '../../components/Button/Button.js';

function Login(props) {
    const [loginModel, setLogin] = useState();

    function handleForm(event) {
        const { value, name } = event.target;

        setLogin(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }

    return (
        <div className="login-form-container">
            <div className="right-section">
                <div>
                    <h2 style={{ color: '#7f1fda' }}>ورود</h2>
                    <p>وارد حساب کاربری خود شوید.</p>
                </div>
                <div className="row">
                    <CustomInput title="نام کاربری" onChange={handleForm} class="custom-input" type="text" />
                    <CustomInput title="رمز عبور" onChange={handleForm} class="custom-input" type="password" />
                    <Button title="ورود" class="login-button"/>
                </div>
                <div style={{marginTop:20}}>
                    <span>ثبت نام نکرده اید؟ <a href="#">ثبت نام</a></span>
                </div>
            </div>
            <div className="left-section">

            </div>
        </div>
    )
}

export default Login;