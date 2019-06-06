import {LOAD_DATA_ASYCN} from '../action_type'
export const loadDataReducer = (state={},action)=>{
    switch(action.type){
        case LOAD_DATA_ASYCN :{
            return {
                data:action.payload
            }
        }
        default : return state
    }
}