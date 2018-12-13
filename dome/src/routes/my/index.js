import React from "react"
import Style from './index.css'
class MyPage extends React.PureComponent{
    render(){
        return<div>
           <ul className={Style.list}>
               <li><span><img src={require('../../assets/icon/yinyue.png')} alt=""/></span><b>本地音乐</b><p>1</p></li>
               <li><span><img src={require('../../assets/icon/diantai.png')} alt=""/></span><b>最近播放</b><p>110</p></li>
               <li><span><img src={require('../../assets/icon/wodeshoucang.png')} alt=""/></span><b>我的电台</b><p>1</p></li>
               <li><span><img src={require('../../assets/icon/zuijinbofang.png')} alt=""/></span><b>我的收藏</b><p>专辑/歌手/视频/专栏</p></li>
               <li><span><img src={require('../../assets/icon/yinyue.png')} alt=""/></span><b>Sati空间</b><p>特别的聆听模式</p></li>
           </ul>
           <h5 className={Style.h5}>
               <p>我创建的歌单（1）</p>
               <em>...</em>
           </h5>
           <dl className={Style.dl}>
               <dt><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3859421672,511986628&fm=200&gp=0.jpg" alt=""/></dt>
               <dd>
                   <p>我喜欢的音乐</p>
                   <p>6首,已下载<b>1</b>首</p>
               </dd>
           </dl>
           <h5 className={Style.h5}>
               <p>我收藏的歌单（1）</p>
                <em>...</em>
           </h5>
           <dl className={Style.dl}>
               <dt><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415529631,3012801483&fm=27&gp=0.jpg" alt=""/></dt>
               <dd>
                   <p>90后的回忆杀-【持续更新】</p>
                   <p><b>537</b>首,by抱抱自己好么</p>
               </dd>
           </dl>
           
        </div>
    }
}

export default MyPage