const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('./features/cake/cakeSlice')
const iceReducer = require('./features/ice/iceCream')
const reduxlogger = require("redux-logger");
//const { coreModule } = require('@reduxjs/toolkit/query')

const logger = reduxlogger.createLogger();
store = configureStore({
    reducer: {
        cake:cakeReducer,
        ice : iceReducer
    },
    middleware: (getdefaultMiddleware)=>getdefaultMiddleware().concat(logger),
});
module.exports = store;