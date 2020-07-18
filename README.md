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
 
 http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
