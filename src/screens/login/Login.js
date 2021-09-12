import React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import Button from '../../components/Button/Button.js';
import userService from '../../services/userService.js';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Spinner from 'react-spinner-material';
import { useEffect } from 'react';

function Login(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [loginModel, setLogin] = useState();
    const loading = useSelector((state) => state.LoadingReducer);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('token')))
            window.location.href = `${window.location.origin}/home`;
    }, []);

    function handleForm(event) {
        const { value, name } = event.target;

        setLogin(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }

    function login() {
        dispatch({
            type: 'ACTIVE',
            response: true
        })
        return userService.login(loginModel).then((result) => {
            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('token', JSON.stringify(result.token))
            return dispatch({
                type: 'SIGN_IN_SUCCESS',
                response: result
            })
        }).then(() => {
            dispatch({
                type: 'DEACTIVE',
                response: false
            })
            history.push("/home");
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="login-container">
            {loading.loadingState ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
                <Spinner size={120} spinnerColor={"#333"} visible={true} />
            </div> : <div className="login-form-container">
                <div className="right-section">
                    <div>
                        <h2 style={{ color: '#7f1fda' }}>ورود</h2>
                        <p>وارد حساب کاربری خود شوید.</p>
                    </div>
                    <div className="row">
                        <CustomInput title="نام کاربری" onChange={handleForm} name="email" class="custom-input" type="email" />
                        <CustomInput title="رمز عبور" onChange={handleForm} name="password" class="custom-input" type="password" />
                        <Button title="ورود" class="login-button" onClick={login} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <span>ثبت نام نکرده اید؟ <a href="/signup">ثبت نام</a></span>
                    </div>
                </div>
                <div className="left-section">

                </div>
            </div>}
        </div>
    )
}

export default Login;