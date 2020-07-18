// 2020, 7/18, pm 4:00-4:05

// 可作請求 Http Request
import axios from 'axios';

// state 狀態預設的初始值
let initState ={
    viewer:'',
    id:'',
    msg:'',
    redirectTo:''
}

// 定義 action type
const ok = 'OK';
const no = 'Fail';

export function viewer(state=initState, action){

    /*switch(action.type){
        default: return state;
    }*/

    switch(action.type){
        case ok:
            return{msg:'' , redirectTo:'/vip'}
        case no:
            return{msg: action.msg}
        default:
            return state;
    }
}

//dispatch usage
export function vipCall({viewer,id}){
    if(!viewer || !id) {

        return{msg: 'plz enter into data'}
        
    }

    return dispatch => {
        axios.post('/viewer/vip',{viewer, id})
            .then(res => {
                if(res.status === 200 ) {
                    dispatch()
                }else {
                    dispatch();
                }
            })
    }

}