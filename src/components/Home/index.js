import React,{Component} from 'react'
import {Link,BrowserRouter as Router,Switch} from 'react-router-dom';
import {RouteWithSubRoute} from '../../router'
import ssq from './imgs/ssq@2x.png'
import zoushitu from './imgs/zoushitu.png'
const imgs= [
    {src:ssq,name:'双色球',detail:'2元中1000万'},
    {src:zoushitu,name:'走势图',detail:'中奖走势研究'},
]
class Home extends Component{
    render(){
        let rs = this.props.children.map((item,index)=>{
            for(let i=0;i<imgs.length;i++){
                if(imgs[i].name === item.name){
                    item.src = imgs[i].src
                    item.detail = imgs[i].detail
                }
            }
            return item
        })
        return(
            <Router>
                <div className='Home'>
                    {rs.map((item,index)=>{
                        return (
                            <div key={item.name}>
                                <Link to={item.path}>
                                    <dl className='gameInfo'>
                                        <dt className='gameIcon'>
                                            <img src={item.src} alt=''></img>
                                        </dt>
                                        <dd className='gameName'>
                                            <h3>{item.name}</h3>
                                            <p>{item.detail}</p>
                                        </dd>
                                    </dl>
                                </Link>
                            </div>
                        )
                    })}
                    <Switch>
                        {
                            rs.map((item,index)=>{
                                return <RouteWithSubRoute key={item.name} {...item}></RouteWithSubRoute>
                            })
                        }
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Home