import React, { Component } from 'react';
import {connect} from 'dva'
import {formaTime} from '../utils/index'

import Style from './playPage.css'
import Lyric from './lyric'
import Audio from './audio';
class PlayPage extends Component {
    constructor(){
        super();
        this.state={
            progress:0,
            isPlay:true
        }
    }
    componentDidMount(){
      console.log(this.props.lyricList)
        const {state}=this.props.location
        this.props.changepaly(state)
        this.props.changepalylist(state)
        this.props.changeLyric(state)
    }
    timeUpdate(){
        let progress = this.refs.audio.currentTime/this.refs.audio.duration*100
        this.setState({
            progress
        })
    } 
     get duration(){
        if(this.refs.audio && this.refs.audio.duration){
            return formaTime(this.refs.audio.duration)
        }
        return "00:00"
    }
    //播放当前时间
     get currentTime(){
        if(this.refs.audio && this.refs.audio.currentTime){
            return formaTime(this.refs.audio.currentTime )
        }
        return "00:00"
     }

    //播放/暂停
    changeState(){
        this.setState({
            isPlay: !this.state.isPlay
        },()=>{
            this.state.isPlay?this.refs.audio.play():this.refs.audio.pause()
        })
    }   
    //触摸进度条事件
    touchStart(){
        this.setState({
            isPlay:false
        },()=>{
            this.refs.audio.pause()
        })
    }
    //移动进度条
    touchMove(e){
     
        let touch = e.touches[0],
            progressEle = this.refs.progress
   console.log(progressEle.offsetLeft)
        let progress = (touch.pageX - progressEle.offsetLeft)/progressEle.offsetWidth;
        if(progress > 1){
            progress = 1
        }
        if(progress < 0){
            progress = 0
        }
        this.setState({
            progress: progress *100 
        },()=>{
            this.refs.audio.currentTime = progress * this.refs.audio.duration
        })
    }
    //离开进度条
    touchEnd(){
        this.setState({
            isPlay:true
        },()=>{
            this.refs.audio.play()
        })
    }
     render() {
        return (
            <div className={Style.play}>
                <audio src={this.props.playlist} crossOrigin="anonymous" autoPlay ref="audio" onTimeUpdate={()=>this.timeUpdate()}></audio>
                <div className={this.state.isPlay?Style.images:Style.disable}>
                    <img src={this.props.playpagelist.picUrl} alt=""/>
                </div> 
                <Lyric lyric={this.props.lyricList} currentTime={this.refs.audio && this.refs.audio.currentTime}/>
                <p className={Style.name}>{this.props.playpagelist.name}</p>
                <div className={Style.schedule}>
                    <em>{this.currentTime}</em>
                    <p className={Style.progress} ref='progress'
                     onTouchStart={this.touchStart.bind(this)}
                     onTouchMove={this.touchMove.bind(this)}
                     onTouchEnd={this.touchEnd.bind(this)}><span style={{width:this.state.progress+'%'}}></span></p>
                    <em>{this.duration}</em>
                </div>
                <div className={Style.button}>
                    <button>上一曲</button>
                    <button onClick={this.changeState.bind(this)}>{this.state.isPlay?'暂停':'播放'}</button>
                    <button>下一曲</button>
                </div>
                <Audio audio={this.refs.audio}/>
            </div>
        );
    }
}

const mapToProps = (state)=>{ 
    return {
            playlist:state.index.playlist,
            playpagelist:state.index.playpagelist,
            lyricList:state.index.lyricList
        }
}

const PalyList =dispatch=>{
    return {
        changepaly:type=>{
            dispatch({
                type:'index/paly',
                payload:type
            })
        },
        changepalylist:type=>{
            dispatch({
                type:'index/palyList',
                payload:type
            })
        },
        changeLyric:type=>{
            dispatch({
                type:'index/getLyric',
                payload:type
            })
        }
    }
}

export default connect(mapToProps,PalyList)(PlayPage);
