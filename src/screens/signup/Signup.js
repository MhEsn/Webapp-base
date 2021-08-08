import React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import Button from '../../components/Button/Button.js';
import userService from '../../services/userService.js';
import Spinner from 'react-spinner-material';

function Signup() {

    const [userModel, setUser] = useState({
        firstName: ""
        , lastName: ""
        , age: ""
        , email: ""
        , address: ""
        , phoneNumber: ""
        , password: ""
        , confirmPassword: ""
    });
    const [loading, setLoading] = useState(false)

    function handleForm(event) {
        const { value, name } = event.target;

        setUser(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }

    function signup() {
        setLoading(true);
        return userService.signup(userModel).then((result) => {
            setLoading(false);
            return result;
        }).catch((error) => { return error })
    }

    return (
        <div className="signup-container">
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
                <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
            </div> :
                <div className="signup-form-container">
                    <div className="right-section">
                        <div className="row signup-topic-div">
                            <h2 style={{ color: '#7f1fda' }}>ثبت نام </h2>
                            <p>برای یوگی شدن آماده شده اید؟!</p>
                            <p>با پرکردن فرم زیر می توانید به سمت یوگا بروید.</p>
                        </div>
                        <div className="row">
                            <CustomInput title="نام" type="text" name="firstName" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                            <CustomInput title="نام خانوادگی" type="text" name="lastName" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                            <CustomInput title="شماره تلفن همراه" type="number" name="phoneNumber" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                            {/* <CustomInput title="آدرس" type="text" name="address" class="custom-input" containerClass="custom-input-container" onChange={handleForm} /> */}
                            <CustomInput title="سن (اختیاری)" type="number" name="age" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                            <CustomInput title="پست الکترونیک" type="email" name="email" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                            <CustomInput title="رمز عبور" type="password" name="password" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                            <CustomInput title="تکرار رمز عبور" type="password" name="confirmPassword" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                        </div>
                        <div className="row">
                            <span>حساب کاربری دارید ؟ <a href="#">ورود</a></span>
                        </div>
                        <div className="row" style={{ marginTop: 10 }}>
                            <Button title="ساخت حساب" class="signup-button" onClick={signup} />
                        </div>
                    </div>
                    <div className="left-section">

                    </div>
                </div>}

        </div>
    )
}

export default Signup;