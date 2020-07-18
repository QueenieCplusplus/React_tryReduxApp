//2020, 7/18, pm 4:10-
// combine with both of the reducer and v.redux

import {combineReducers} from 'redux';
import {viewer} from './v.redux';

// combinReducer(mappingObj): State
// 傳入物件
// 傳出狀態
export default combineReducers({viewer});
