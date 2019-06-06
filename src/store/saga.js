import axios from 'axios'
import {put,takeEvery,takeLatest} from 'redux-saga/effects'
import {loadDateAsycn} from './Actions'
function * LoadData(action){
    console.log('loadData')
    try{
        var rs = yield axios.get("http://localhost:3000/gameManage/games/findByGameName",{gameName:'ssq',pageSize:10,pageNo:1})
        console.log(rs)
    }catch(e){
        console.log('错误信息',e)
    }
}
function *mySaga(){
    console.log("这是你的saga");
    yield takeLatest('LOAD_DATA_REQUEST',LoadData)
}
export default LoadData