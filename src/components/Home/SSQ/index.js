import React,{Component} from 'react'
import { func } from 'prop-types';
const getArr = (count)=>{
    let arr = new Array(count)
    arr = arr.join(',').split(',')
    let rs = arr.map((item,index)=>{
        let resault = index+1
        return resault>9?resault:'0'+resault
    })
    return rs
}

class Ssq extends Component{
    constructor(props){
        super(props)
        this.state={
            arr1:getArr(33),
            arr2:getArr(16),
            redBalls:[],
            blueBall:[],
            redStyle:{background:'red',color:'white'},
            blueStyle:{background:'blue',color:'white'},
        }
    }
    randomNum=()=>{
        let redArr = [];
        while(redArr.length<6){
            var num = Math.ceil(Math.random()*33)
            if(redArr.indexOf(num) === -1){
                redArr.push(num)
            }
        }
        redArr = redArr.map((item,index)=>{
            return item>9?item:'0'+item
        })
        var blueNum = Math.ceil(Math.random()*16)
        var blueBall = []
        blueBall.push(blueNum>9?blueNum:'0'+blueNum)
        this.setState({
            redBalls:redArr,
            blueBall:blueBall
        })
    }
    shake=()=>{
        if(window.DeviceMotionEvent){
            var _this = this;
            var speed = 25;
            var x,y,lastX,lastY,lastZ;
            x=y=lastX=lastY=lastZ=0;
            window.addEventListener('devicemotion',function(event){
                var acceleration = event.accelerationIncludingGravity
                x = acceleration.x;
                y = acceleration.y;
                if(Math.abs(x-lastX)>speed||Math.abs(y-lastY)>speed){
                    _this.randomNum()
                }
                lastX = x;
                lastY = y;
            },false)
        }
    }
    componentDidMount(){
        this.shake()
    }
    render(){
        return(
            <div className='SSQ'>
                <div className='randomPick'>
                    <button onClick={this.randomNum}>摇一摇选号</button>
                    <span>至少选择6个红球,1个篮球</span>
                </div>
                <div className='redBall'>
                    <ul className='BallList'>
                        {
                            this.state.arr1.map((item,index)=>{
                                return(
                                    <li className='BallItem redBallItem' 
                                        key={index+item}
                                        style={this.state.redBalls.indexOf(item)===-1?{}:this.state.redStyle}
                                        >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='blueBall'>
                    <ul className='BallList'>
                        {
                            this.state.arr2.map((item,index)=>{
                                return(
                                    <li className='BallItem blueBallItem' 
                                        key={index+item}
                                        style={this.state.blueBall.indexOf(item)===-1?{}:this.state.blueStyle}
                                        >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='allBTN'>
                        <button onClick={this.randomNum} style={{background:'orange'}}>机选</button>
                        <button style={{background:'blue'}}>确定</button>
                </div>
            </div>
        )
    }
}
export default Ssq