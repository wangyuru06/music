import React, { Component } from 'react';
import Style from '../MainPage.css'
import {NavLink} from "dva/router"

class Header extends Component {
    render() {
        return (
            <div className={Style.header}>
               <span></span>
               <NavLink to='/search'><b></b><em>猜你喜欢 浮生</em></NavLink>
               <span></span>
            </div>
        );
    }
}

export default Header;
