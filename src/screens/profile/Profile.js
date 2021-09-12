import React, { useState, useEffect } from 'react';
import userService from '../../services/userService';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {

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
    const loading = useSelector((state) => state.LoadingReducer);
    const dispatch = useDispatch();

    function handleForm(event) {
        const { value, name } = event.target;

        setUser(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }

    useEffect(() => {
        debugger
        return userService.get(JSON.parse(localStorage.getItem('user'))._id).then((result) => {
            setUser(result);
        }).catch((error) => {
            return error;
        })
    }, []);

    return (
        <div className="profile-info-container">
            <div className="row">
                <CustomInput disabled="true" value={userModel.firstName} title="نام" type="text" name="firstName" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                <CustomInput disabled="true" value={userModel.lastName} title="نام خانوادگی" type="text" name="lastName" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                <CustomInput disabled="true" value={userModel.age} title="سن" type="text" name="age" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                <CustomInput disabled="true" value={userModel.email} title="پست الکترونیک" type="text" name="email" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                <CustomInput disabled="true" value={userModel.phoneNumber} title="موبایل" type="text" name="phoneNumber" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
                <CustomInput disabled="true" value={userModel.address} title="آدرس" type="text" name="address" class="custom-input" containerClass="custom-input-container" onChange={handleForm} />
            </div>
        </div>
    )
}

export default Profile;