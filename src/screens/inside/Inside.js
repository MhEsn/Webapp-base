import React from 'react';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu.js';
import Home from '../home/Home.js';
import Profile from '../profile/Profile.js';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { useDispatch } from 'react-redux';

function Inside() {
    return (
        <div className="home-container">
            <SidebarMenu />
            <div className="content-container">
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Inside;