import React from "react"
import Style from './index.css'

class VideoPage extends React.PureComponent{
    render(){
        return<div className={Style.warp}>
           <div className={Style.heads}>
                <p className={Style.imgs}>
                    <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991690080,557696851&fm=27&gp=0.jpg' alt/>
                </p>
                <p className={Style.name}>
                    <p>
                        <span>张晓宇</span>
                        <em>Lv.6</em>
                    </p>
                    <button>签到</button>
                </p>
           </div>
           <div className={Style.nav}>
           <p>
               <span>动态</span>
               <b>1</b>
           </p>
           <p>
               <span>关注</span>
               <b>3</b>
           </p>
           <p>
               <span>粉丝</span>
               <b>1</b>
           </p>
           <p>
               <span>1</span>
               <b>我的资料</b>
           </p>
           </div>
           <div className={Style.news}>
           <p>设置绑定手机号密码，可使用密码登录。</p>
           <button>立即设置</button>
           <span>X</span>
           </div>
           <ul className={Style.newlist}>
               <li>
                   <p>我的消息</p>
                   <span>></span>
               </li>
               <li>
                   <p>会员中心</p>
                   <span>></span>
               </li>
               <li>
                   <p>商城</p>
                   <span>></span>
               </li>
               <li>
                   <p>游戏推荐：明日之后</p>
                   <span>></span>
               </li>
               <li>
                   <p>在线听歌免流量</p>
                   <span>></span>
               </li>
               <li>
                   <p>设置</p>
                   <span>></span>
               </li>
               <li>
                   <p>扫一扫</p>
                   <span>></span>
               </li>
               <li>
                   <p>个性换肤</p>
                   <span>></span>
               </li>
               <li>
                   <p>夜间模式</p>
                   <span>></span>
               </li>
           </ul>
        </div>
    }
}

export default VideoPage