const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./features/cake/cakeSlice')
const iceReducer = require('./features/ice/iceCream')
//const { coreModule } = require('@reduxjs/toolkit/query')

store = configureStore({
    reducer: {
        cake:cakeReducer,
        ice : iceReducer
    }
})
module.exports = store