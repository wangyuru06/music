import React, { Component } from 'react';
import {connect} from 'dva'

import Style from './index.css'
class List extends Component {
    componentDidMount(){
        this.props.changelist()
    }
    render() {
        return (
            <div>
                <h5>推荐歌单</h5>
                <div className={Style.list}>
                    {
                        this.props.list.map((itm,ind)=>{
                            return <dl key={ind}> 
                                <dt><img src={itm.picUrl} alt=""/></dt>
                                <dd>{itm.name}</dd>
                            </dl>
                        })
                    }
                </div>
            </div>
        );
    }
}
const mapToProps=(state)=>{
    return {list:state.index.list}
}
const list = dispatch =>{
    return {
        changelist :type =>{
            console.log(type)
            dispatch({
                type:'index/list',
                payload:type
            })
        }
    }
}
export default connect(mapToProps,list)(List);
