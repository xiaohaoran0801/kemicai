import React from 'react';
import './App.css';
import './iconfont.css'
import {NavBar} from 'antd-mobile';
import {BrowserRouter as Router,Link,Switch,Route,Redirect} from 'react-router-dom'
import {routes,RouteWithSubRoute} from './router'
const homeNavRight = <Link to='/login'><i className='iconfont icon-denglu-copy'></i></Link>
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      leftContent:'网易彩票',
      rightContent:homeNavRight
    }
  }
  changeNav=(item)=>{
    if(item){
      this.setState({
        leftContent:item.leftContent,
        rightContent:''
      })
    }else{
      let leftContent = '网易彩票'
      this.setState({
        leftContent:leftContent,
        rightContent:homeNavRight
      })
    }
  }
  render(){
    return(
      <Router>
      <div>
        <NavBar
          leftContent={this.state.leftContent}
          rightContent={this.state.rightContent}
        ></NavBar>
        <Switch>
          {
            routes.map((item,index)=>{
              return <RouteWithSubRoute key={item.name} {...item} changeNav={this.changeNav}/>
            })
          }
          <Route path='/' render={()=>{
            return <Redirect to="/home"></Redirect>
          }}></Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
