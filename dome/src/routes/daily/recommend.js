import React, { Component } from 'react';
import {connect} from 'dva'

import Style from './index.css'
class Recommend extends Component {
    componentDidMount(){
        this.props.getrecommend()
    }
    render() {
        console.log(this.props)
        return (
            <div className={Style.list}>
                {
                    this.props.recommend&&this.props.recommend.map((itm,ind)=>{
                        return <dl key={ind}>
                        <dt><img src={itm.picUrl} alt=''/></dt>
                        <dd>
                            <p>{itm.name}</p>
                            <p>{itm.copywriter}</p>
                        </dd>
                        </dl>
                    })
                }
            </div>
        );
    }
}
const mapToProps=(state)=>{
    return {recommend:state.index.recommend}
 }
 const getrecommend = dispatch =>{
     return {
        getrecommend : type =>{
         dispatch({
           type:'index/recommend',
           payload:type
         })
       }
     }
 
 }

export default connect(mapToProps,getrecommend)(Recommend);
