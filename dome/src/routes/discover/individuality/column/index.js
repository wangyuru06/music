import React, { Component } from 'react';
import {connect} from 'dva'

import Style from './index.css'
class Column extends Component {
    componentDidMount(){
        this.props.changeColumn()
    }
    render() {
        return (
            <div className={Style.column}>
              {
                  this.props.columnList.map((itm,ind)=>{
                      return <dl key={ind}>
                          <dt><img src={itm.coverUrl} alt=""/></dt>
                          <dd>{itm.name}</dd>
                      </dl>
                  })
              }
            </div>
        );
    }
}
const mapToProps=(state)=>{
    return {columnList:state.index.columnList}
}

const column = dispatch =>{
    return {
        changeColumn :type=>{
            dispatch({
                type:'index/column',
                payload:type
            })
        }
    }
}
export default connect(mapToProps,column)(Column);
