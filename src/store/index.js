import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

const initialState = {
    token:"",
    userData:{}
}

const appStore = (state = initialState,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default createStore(appStore,applyMiddleware(ReduxThunk,ReduxLogger))