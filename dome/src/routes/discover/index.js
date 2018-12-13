import React from "react"
import {NavLink} from "dva/router"

import RouterView from '../../router/RouterView'
import Style from './index.css'
class VideoPage extends React.PureComponent{
   render(){
    const {routes}= this.props
       return (
           <div>
               <div className={Style.nav}>
                    <NavLink to='/MainPage/discover/individuality'>个性推荐
                    </NavLink>
                    <NavLink to='/MainPage/discover/anchor'>主播电台</NavLink>
               </div>
               <RouterView routes={routes}></RouterView>
           </div>
       )
   }
  }
  
export default VideoPage