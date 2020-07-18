// 2020, 7/18, pm 4:35
// 註冊按鈕繫結的事件呼叫vipCall這個方法

import React from 'react';

//import {connect} from 'react-redux';
//import{vipCall} from './Redux/v.redux'

/*@connect(
    state => state,
    {vipCall}
)*/

class vip extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            viewer:'',
            id:''
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(k, v) {
        this.setState({
            [k]: v
        })
    }

    render(){
        return(
            <div>    
                <p>hi</p>
                <button onClick={()=> this.changeHandler('viewer', 'Kate Chen')}> default viewer</button>
                <button onClick={()=> this.changeHandler('id', '2020718')}> default id</button>
            </div>
        );
    }

}

export default vip;

