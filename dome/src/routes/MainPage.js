import React from 'react';
import RouterView from '../router/RouterView'

import Header from "./header"
import Footer from './footer'
import Style from './MainPage.css'
class MainPage extends React.Component {
 render(){
  const {routes}= this.props
  return (
    <div className={Style.warper}>
    <Header></Header>

    <main className={Style.main}>
      <RouterView routes={routes}></RouterView>
    </main>

    <Footer></Footer>
    </div>
  );
 }
}



export default MainPage