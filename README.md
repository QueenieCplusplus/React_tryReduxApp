# React_tryReduxApp


7/19, 20 http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html


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

Store.dispatch()

Reducer(state, action)
