
import {createStore,combineReducers,applyMiddleware } from 'redux';

// first reducer

const initalFirstReducer = {init :0};


const firstReducer = (store = 0,action) =>
{
    if (action.type == 'ADD') {

        const addedVal = store + action.data;
        return addedVal;
    }
    else if(action.type == 'SUB')
    {
        const subVal = store - action.data;
        return subVal;
    }else{
        return store
    }
}


// second reducer

const initalSecReducer = {init :0};


const secondReducer = (store = 0,action) =>
{
    if (action.type == 'ADD') {

        console.log('hey there 2nd, in ADD');
        return true;
    }
    else if(action.type == 'SUB')
    {
        console.log('hey there 2nd, in SUB');
        return false;
    }else{
        return store;
    }

}

const reducers = combineReducers({
    first :firstReducer,
    second : secondReducer
});

const store = createStore(reducers);

store.subscribe(()=>{
    console.log('>>>>>>>>>>>>', store.getState());
})

const addition = (data)=>{
    return{
        type:'ADD',
        data
    }
}

const subtraction = (data)=>{
    return{
        type:'SUB',
        data
    }
}

store.dispatch(addition(4));
store.dispatch(subtraction(3));
store.dispatch(addition(1));
store.dispatch(subtraction(2));