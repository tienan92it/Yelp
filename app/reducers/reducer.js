/**
 * Created by AnTran on 3/25/17.
 */
import {combineReducers} from 'redux';


// Defined types, can be based on your scenes that you want they get data each the other.
const types = {
    dataLogin: 'Login',
    dataHome: 'Home',
    dataSetting: 'Setting'
}

// Defined actions
export const actionCreators = {
    storeDistance (params){
        return {
            type: types.dataSetting,
            payload: params,
        }
    },

    storeDataScene3 (params){
        return {
            type: types.dataScene3,
            payload: params,
        }
    }
}

const initialState = {};

// Store your data to Redux based on your action
const searchReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case types.dataLogin: {
            return {
                ...state,
                params: payload,
            }
        }
        case types.dataHome: {
            return {
                ...state,
                params: payload,
            }
        }
        case types.dataSetting: {
            return {
                ...state,
                params: payload,
            }
        }
        default:
            return state;
    }
}


export default combineReducers({
    searchReducer,
})