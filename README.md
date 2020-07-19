# React_tryReduxApp


7/19, 20 繼續實作


Redux 相當複雜，在如下狀況，可適用：

* 用戶使用方式複雜
* 用戶之間可以協作
* WebSocket
* View 要從多來源獲取資料

技術角度來說，即：

* 共享元件的狀態
* 一元件改變另一元件狀態
* 一元件改變全局狀態

網頁實作上：

* 一個視覺對應一狀態
* 狀態存放在物件中

# Core

Store

Action

Store.dispatch() 是 view 發出 action 的唯一方法

Reducer(oldState, action): newState

combineReducers() 整合 reducers

    const combineReducers = reducers => {
      return (state = {}, action) => {
        return Object.keys(reducers).reduce(
          (nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
          },
          {} 
        );
      };
    };
    
 # Flux
 
 整個流程就是 reducer 是家庭主婦， action 是煮飯家電工具，state 是食材，輸出新的料理，dispatch() 是熊貓外送，能送鍋具和主婦從電商或電視購物購買來的煮飯家電工具。
 
 store 是冰箱，專門存放尚未料理的食材或是已經完成的美食。
 所以，請先把 reducer 視同為主角，reducer(state, action): newState。
 action 要定義好，主婦一開始就要知道要用哪些工具鍋具。
 dispatch(action)則是熊包外送載貨工具鍋具來給主婦。
    
 ![flux](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)
 

# actions.reduce()

    // to make a sum and conclusion ...................................................
    /* A function that accepts up to four arguments. 
    The reduce method calls the callbackfn function one time for each element in the array.*/
    //const sumUp = actions.reduce(callbackfn(preState, currentState, index), array)
    const weGot = actions.reduce(reducer, 0);


# Reducer

reducer 是一函數，接收當前 state 和 action 作為必選參數，並返回新的 state。

reducer 是 store 的計算過程，當 store 接收到 action 後，會吐出新狀態，從而影響 view。

reducer 的限制是不得調用 Date.now() 或 Math.random() 方法。以免得到不同結果。

reducer(state, action)

    import reducer from './Redux/reducer';

    // 文法展示
    /*const reducer = function(old_state, action){
        return new_state;
    }*/

// 實作範例

    const currentState = 1000;
    const reducer = (state = currentState, action) => {

        switch(action.type){
            case 'add_on':
                return state * action.payload;
            default:
                return state;
        }

    };

// 其他實作範例

    const state = reducer( currentState, action);

    // 或是這樣的敘述

    const state = reducer( currentState, {
        type: 'add_on_3times_val',
        payload: 3
    });


# Store

    // 生成 store
    // 整個應用程式只能擁有一個 store
    import {createStore} from 'redux';

    // pass store
    import {Provider} from 'react-redux';

    // 接受另一函數作為參數，返回新的 store
    // createStore(reducer, action);
    // 'store' is assigned a value ;
    // store 儲存所有數據時間點的快照。
    // store.getState() 可得到某數據某時間點的快照。
    // createStore 的第二參數是 最初狀態，伺服器送的。
    // 如下第二參數會覆蓋 reducer 函數的 defaultState
    // const store = createStore(reducer, window.State_from_server);
        const store = createStore(reducer);

    //or const store = createStore(reducer, action);

    // 一 state 對應 一 view。 

        const stateActual = store.getState();

        // 讓 View 發出 Action 的唯一方法
        store.dispatch(
            action
        );

        // 註冊監聽器
        store.subscribe(listener)

        // 解除監聽器
        let unsub = store.subscribe(()=>console.log(store.getState()));
        unsub();



# Action

user 透過 view 改變 state, 無法直接對 state

而要透過 view 上發出 action 通知。

action 是改變 state 的唯一辦法，能運送數據到 store。

action 的屬性中 type 是必選，其它是可選。

type 代表動作的名稱。

    const action = {
        type: 'add_on_3times_val',
        payload: 3
    };

    // 以上 action 可以利用函數生成。稱為 action creator !
    // 略
    /*const ADD_TO_DO = 'add a to do';
    function addTodo(text){
        //...
    }*/


 # Ref doc
 
 http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
