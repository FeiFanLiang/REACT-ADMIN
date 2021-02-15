import {createStore} from 'redux';


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

export default createStore(appStore)