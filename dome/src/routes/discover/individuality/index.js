import React, { Component } from 'react';
import {NavLink} from "dva/router"

import Banner from './banner'
import List from './list'
import Style from '../index.css'
import Column from './column'
class Individuality extends Component {
    render() {
        return (
            <div>
                <Banner></Banner>
                <ul className={Style.subNav}>
                   <li><div><img src={require('../../../assets/tinggeshiqu2.png')} alt=""/></div><p>私人FM</p></li>
                   <NavLink to='/daily'><div><img src={require('../../../assets/tinggeshiqu2.png')} alt=""/></div><p>私人FM</p></NavLink>
                   <li><div><img src={require('../../../assets/tinggeshiqu2.png')} alt=""/></div><p>私人FM</p></li>
                   <li><div><img src={require('../../../assets/tinggeshiqu2.png')} alt=""/></div><p>私人FM</p></li>
                </ul>
                <List></List>
                <div className={Style.member}>
                <h4>会员专区</h4>
                 <Banner></Banner>
                 <button>进入会员专区 》</button>
                </div>
                <Column></Column>
            </div>
        );
    }
}

export default Individuality;
