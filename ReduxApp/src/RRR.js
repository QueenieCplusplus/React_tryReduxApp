// 2020, 7/18, noon
// Router

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import vip from './vip';

// 2020, 7/18, pm 4:10-5:30
// redux object -> reducer() -> state , this is store with data

// 生成 store
import reducer from './Redux/reducer';

// 讓 reducer 生成 store，並且合併生成資料
import {createStore, compose} from 'redux';

// pass store
import {Provider} from 'react-redux';

// 中介軟體 support async
import{applyMiddleware} from 'redux';

// async 
import thunk from 'redux-thunk';

// createStore(reducer, action);
// 'store' is assigned a value ;
const store = createStore(reducer, compose(applyMiddleware(thunk)))


export default function RRR(){

    return(

        <Provider store={store}>
            <Router>
                <Route path="/">
                    <vip/>
                </Route>  
            </Router>
        </Provider>
    );
            
}

/* <Route path='/vip' component={vip}></Route> */



