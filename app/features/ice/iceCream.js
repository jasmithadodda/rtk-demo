const createSlice =  require('@reduxjs/toolkit').createSlice

const initialState = {
    numIce:10
}

const iceCream = createSlice({
    name:'ice',
    initialState,
    reducers:{
        ordered :(state)=>{ state.numIce--},
        restocked:(state,action)=>{ state.numIce += action.payload}
    }
})

module.exports = iceCream.reducer
module.exports.iceCreamActions = iceCream.actions