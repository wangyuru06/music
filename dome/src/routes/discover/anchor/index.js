import React, { Component } from 'react';

import Banner from '../individuality/banner'
import Style from '../index.css'
import List  from './list'
class Anchor extends Component {
    render() {
        const imgs=[require('../../../assets/tinggeshiqu2.png'),require('../../../assets/tinggeshiqu2.png'),require('../../../assets/tinggeshiqu2.png'),require('../../../assets/tinggeshiqu2.png')]
        return (
            <div>
                <Banner></Banner>
                <ul className={Style.subNav}>
                   {
                        imgs.map((itm,ind)=>{
                            return <li key={ind}><div><img src={itm} alt=""/></div><p>私人FM</p></li>
                        })
                   }
                </ul>
                <List></List>
            </div>
        );
    }
}

export default Anchor;
