import React from 'react';
import { connect } from 'dva';
import Style from  './LoginPage.css';


@connect(state=>{
  return {
    login:state.login
  }
},dispatch=>{
  return {
    login:payload=>{
      dispatch({
        type:'index/login',
        payload
      })
    }
  }
})
class LoginPage extends React.PureComponent{
  constructor(props){
    super(props);
    this.state={
      phone:'17718445587',
      password:'147852.'
    }
  }
  submit(){
    if(!/\d{11}/.test(this.state.phone)){
      alert('请输入正确的手机号码');
      return; 
    }
    if(!/\S{6,20}/.test(this.state.password)){
      alert('请输入正确的密码')
      return;
    }
    this.props.login({
      phone:this.state.phone,
      password:this.state.password
    })
    //this.props.history.push('/main/discover')
  }
render(){
  return (
    <div className={Style.parent}>
      <p className={Style.p}><img src={require('../assets/netease1.png')}/></p>
      <input className={Style.input} type="text" placeholder="手机号" maxLength="11" value={this.state.phone}  onChange={e=>this.setState({phone: e.target.value})}/>
      <input className={Style.input} type="password" placeholder="密码" value={this.state.password} onChange={e=>this.setState({password: e.target.value})}/>
      <button className={Style.button} onClick={this.submit.bind(this)}>登录</button>
      <p>重设密码</p>
    </div>
  )}
}


export default LoginPage