import { produceWithPatches } from '@reduxjs/toolkit/node_modules/immer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userService from '../../services/userService.js';
import { Link } from 'react-router-dom';

function SidebarMenu() {

    const [user, setUser] = useState('مدیر');
    const dispatch = useDispatch();
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user)
            setUser(`${user.firstName} ${user.lastName}`);
    });

    const [menuStatus, setMenuStatus] = useState(true);

    function handleMenu() {
        setMenuStatus(!menuStatus);
    }
    function logout() {
        return userService.logout().then((result) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            dispatch({ type: 'LOG_OUT' });
            window.location.href = `${window.location.origin}/login`;
        }).catch((e) => { return e; })
    }

    return (
        <div className={menuStatus ? 'side-bar-menu-container' : 'side-bar-menu-container2'}>
            {/* <div className="menu-button">
                <button onClick={handleMenu}>click</button>
            </div> */}
            <div className="header">
                <h2>YOGA</h2>
                <span>{user} خوش آمدید</span>
            </div>
            <div className="menu-items">
                <ul>
                    {user.roleType === 1 ? 
                        <li>
                            <Link to="/addCourse">افزودن دوره</Link>
                        </li>
                    : null}
                    <li>
                        <Link to="/home">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link to="/course">دوره ها</Link>
                    </li>
                    <li>
                        <Link to="/profile">پروفایل</Link>
                    </li>
                    <li><a href="#" onClick={logout}>خروج</a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>تمامی حقوق این سایت محفوظ می باشد.</p>
            </div>
        </div>
    )
}

export default SidebarMenu;