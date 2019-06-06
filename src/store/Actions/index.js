import {LOAD_DATA_ASYCN} from '../action_type'
export function loadDateAsycn(payload){
    return {
        type:LOAD_DATA_ASYCN,
        payload:payload
    }
}