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
                <h5>今日优选</h5>
                <div className={Style.list} >
                    {
                        this.props.list&&this.props.list.map((itm,ind)=>{
                            return <dl key={ind}>
                                <dt><img src={itm.picUrl} alt=""/></dt>
                                <dd>
                                    <p>{itm.copywriter}</p>
                                    <p>{itm.name}</p>
                                </dd>
                            </dl>
                        })
                    }
                </div>
            </div>
        );
    }
}
const mapToProps=(state)=>{
    console.log(state)
    return {list:state.anchor.list}
}
const list = dispatch =>{
    return{
        changelist:type =>{
            dispatch({
                type:'anchor/list',
                payload:type
            })
        }
    }
}

export default connect(mapToProps,list)(List);
