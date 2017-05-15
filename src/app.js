/**
 * Created by arushi on 11/5/17.
 */

import {createStore} from 'redux';

const initalVal = {init :0}


const reducer = (store = 0,action) =>
{
    if (action.type == 'ADD') {

        const addedVal = store + action.data;
        return addedVal;
    }
    else if(action.type == 'SUB')
    {
        const subVal = store - action.data;
        return subVal;
    }
}


 const store = createStore(reducer);

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






