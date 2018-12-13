import React, { Component } from 'react';
import Footer from './footer'
import Recommend from './daily/recommend'
import Style from './MainPage.css'
class Daily extends Component {
    render() {
        return (
            <div className={Style.warper}>
                <header className={Style.hea}>每日推荐</header>
                <main className={Style.main}>
                    <Recommend></Recommend>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}

export default Daily;
