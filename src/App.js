import React from 'react';
import './App.css';
import Siderbar from './components/Siderbar/Siderbar'
import {NavBar,Icon,Drawer} from 'antd-mobile';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show:false,
      title:'网易彩票'
    }
  }
  changeShow=()=>{
    this.setState({
      show:!this.state.show
    })
  }
  render(){
    return(
      <div>
        <NavBar
          onLeftClick={this.changeShow}
        >{this.title}</NavBar>
      </div>
    )
  }
}

export default App;
