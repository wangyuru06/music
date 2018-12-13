import React from "react"
import { connect } from 'dva';
import { Carousel } from 'antd';

import Style from '../../index.css'
class Banner extends React.PureComponent{
    componentDidMount(){
        this.props.changeName()
    }
    render(){
       let {bannerList} =this.props
        return<div className={Style.prant}>
            <div className={Style.banner}>
                <Carousel autoplay>
                    {
                        bannerList&&bannerList.map((item,i)=>{
                            return (
                                <div key={i} className={Style.banner}>
                                    <img src={item.imageUrl} alt=''></img>
                                 </div>
                                )
                        })
                    }
                </Carousel>
            </div>
                
        </div>
    }
}

const mapToProps=(state)=>{
   return {bannerList:state.index.bannerList}
}
const bannerLinst = dispatch =>{
    return {
        changeName : type =>{
        dispatch({
          type:'index/bannerList',
          payload:type
        })
      }
    }

}
  
export default connect(mapToProps,bannerLinst)(Banner)