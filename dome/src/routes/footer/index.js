import React, { Component } from 'react';
import {NavLink} from "dva/router"
import Style from '../MainPage.css'
class Footer extends Component {
    render() {
        return (
            <footer className={Style.footer}>
                <NavLink to="/MainPage/discover">
                    <p></p>
                    <span>发现</span>
                </NavLink>
                <NavLink to="/MainPage/video">
                    <p></p>
                    <span>视频</span>
                </NavLink>
                <NavLink to="/MainPage/my">
                    <p></p>
                    <span>我的</span>
                </NavLink>
                <NavLink to="/MainPage/friend">
                    <p></p>
                    <span>朋友</span>
                </NavLink>
                <NavLink to="/MainPage/account">
                    <p></p>
                <span>账号</span>
                </NavLink>
            </footer>
        );
    }
}

export default Footer;
