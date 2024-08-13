//npm install @reduxjs/toolkit

const store = require('./app/store')
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./app/features/ice/iceCream').iceCreamActions

console.log(store.getState())
const unSubscribe = store.subscribe(()=>{
    console.log('updated state ',store.getState())

})


store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(cakeActions.restocked(3))
//store.dispatch(iceActions.restocked(3))
unSubscribe()