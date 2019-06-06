import React,{Component} from 'react'
import {Button,Icon,Toast} from 'antd-mobile'
import {Switch} from 'react-router-dom'
import {RouteWithSubRoute} from '../../router'
import axios from 'axios'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                username:'',
                password:'',
            }
        }
    }
    goBack=()=>{
        this.props.history.go(-1)
        this.props.changeNav()
    }
    setUsername=(ev)=>{
        let username = ev.target.value
        this.setState({
            userInfo:{
                loginType:'username',
                loginValue:username
            }
        })
    }
    setPassword=(ev)=>{
        let password = ev.target.value
        let userInfo = this.state.userInfo
        userInfo.password = password
        this.setState({
            userInfo
        })
    }
    sigin=()=>{
        let _this =  this;
        let userInfo = this.state.userInfo
        axios.post("http://localhost:3000/webapp/account/login",userInfo).then((resp)=>{
            resp = resp.data
            if(resp.success){
                Toast.success('登录成功!',1);
                _this.goBack()
            }else{
                Toast.fail("登录失败",1)
            }
        })
    }
    componentDidMount(){
        const leftContent = <div style={{zIndex:100,display:'flex',justifyContent:'center',alignItems:'center'}}
                                onClick={this.goBack}    
                                >
                            <Icon type='left' size='lg'></Icon>返回</div>
        this.props.changeNav({leftContent})
    }
    pushView=()=>{
        let path = this.props.children[0].path
        this.props.history.push({pathname:path})
    }
    render(){
        return(
            <div className='login'>
                <input type='text' placeholder=' 网易邮箱/账号' className='userInfo' onChange={this.setUsername}/>
                <input type='password' placeholder=' 密码' className='userInfo' onChange={this.setPassword}/>
                <button className='loginBTN' onClick={this.sigin}>登 录</button>
                <div className='loginBottom'>
                    <Button style={{flex:1,height:'52px',color: 'lightseagreen',borderRight:'1px solid lightgray'}}>忘记密码?</Button>    
                    <Button style={{flex:1,height:'52px',color: 'lightseagreen'}} onClick={this.pushView}>注册</Button>
                </div>
                <Switch>
                    {this.props.children.map((item,index)=>{
                        return <RouteWithSubRoute key={item.name} {...item} changeNav={this.props.changeNav}></RouteWithSubRoute>
                    })}
                </Switch>
            </div>
        )
    }
}
export default Login