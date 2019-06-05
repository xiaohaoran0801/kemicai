import React,{Component} from 'react'
import {List,InputItem,Toast,Button,Icon} from 'antd-mobile';
import axios from 'axios'
class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError1: false,
            hasError2: false,
            hasError3: false,
            hasError4: false,
            userInfo: {
                username:'',
                password:'',
                email:'',
                phone:'',
            },
        }
    }
    goBack=()=>{
      this.props.history.go(-1)
    }
    register=()=>{
      axios.post('http://localhost:3000/register',{userInfo:this.state.userInfo})
      .then((resp)=>{
        console.log(resp)
      })
    }
    onPhoneErrorClick = () => {
        if (this.state.hasError4) {
          Toast.info('请输入11位电话号码');
        }
    }
    onUsernameErrorClick = () => {
        if (this.state.hasError1) {
          Toast.info('用户名长度为6到12个字符');
        }
    }
    onEmailErrorClick = () => {
        if (this.state.hasError3) {
          Toast.info('邮箱格式不正确，请重新输入！');
        }
    }
    onPasswordErrorClick = () => {
        if (this.state.hasError2) {
          Toast.info('密码长度为6到12个字符');
        }
    }

    checkPhone = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError4: true,
          });
        } else {
          this.setState({
            hasError4: false,
          });
        }
        let userInfo = this.state.userInfo
        userInfo.phone = value
        this.setState({
          userInfo
        });
    }
    checkUsername = (value) => {
        if (value.length<6||value.length>12) {
          this.setState({
            hasError1: true,
          });
        } else {
          this.setState({
            hasError1: false,
          });
        }
        let userInfo = this.state.userInfo
        userInfo.username = value
        this.setState({
          userInfo
        });
    }
    checkEmail = (value) => {
        var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
        if (!reg.test(value)) {
          this.setState({
            hasError3: true,
          });
        } else {
          this.setState({
            hasError3: false,
          });
        }
        let userInfo = this.state.userInfo
        userInfo.email = value
        this.setState({
          userInfo
        });
    }
    checkPassword = (value) => {
        if (value.length<6||value.length>12) {
          this.setState({
            hasError2: true,
          });
        } else {
          this.setState({
            hasError2: false,
          });
        }
        let userInfo = this.state.userInfo
        userInfo.password = value
        this.setState({
          userInfo
        });
    }
    componentDidMount(){
        const leftContent = <div style={{zIndex:100,display:'flex',justifyContent:'center',alignItems:'center'}}
                                onClick={this.goBack}    
                                >
                            <Icon type='left' size='lg'></Icon>返回</div>
        this.props.changeNav({leftContent})
    }
    render(){
        console.log(this.props)
        return(
            <div className='Register'>
                <List>
                    <InputItem
                        type="text"
                        placeholder="请输入你的用户名"
                        error={this.state.hasError1}
                        onErrorClick={this.onUsernameErrorClick}
                        onChange={this.checkUsername}
                        value={this.state.userInfo.username}
                    >用户名</InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入你的密码"
                        error={this.state.hasError2}
                        onErrorClick={this.onPasswordErrorClick}
                        onChange={this.checkPassword}
                        value={this.state.userInfo.password}
                    >密码</InputItem>
                    <InputItem
                        type="email"
                        placeholder="请输入你的邮箱"
                        error={this.state.hasError3}
                        onErrorClick={this.onEmailErrorClick}
                        onChange={this.checkEmail}
                        value={this.state.userInfo.email}
                    >邮箱</InputItem>
                    <InputItem
                        type="phone"
                        placeholder="请输入你的手机号"
                        error={this.state.hasError4}
                        onErrorClick={this.onPhoneErrorClick}
                        onChange={this.checkPhone}
                        value={this.state.userInfo.phone}
                    >手机号码</InputItem>
                </List>
                <Button type='primary' 
                  style={{width:'80%',height:'44px',marginTop:'20px'}}
                  onClick={this.register}
                >确定</Button>
            </div>
        )
    }
}
export default Register