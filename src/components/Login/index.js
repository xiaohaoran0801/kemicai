import React,{Component} from 'react'
import {Button,Icon} from 'antd-mobile'
import {Switch} from 'react-router-dom'
import {RouteWithSubRoute} from '../../router'

class Login extends Component{
    goBack=()=>{
        this.props.history.go(-1)
        this.props.changeNav()
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
                <input type='text' placeholder=' 网易邮箱/账号' className='userInfo'/>
                <input type='text' placeholder=' 密码' className='userInfo'/>
                <button className='loginBTN'>登 录</button>
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