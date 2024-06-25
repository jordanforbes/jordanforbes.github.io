import { createSlice } from "@reduxjs/toolkit"

const initialState={
    root:'',
    rawRoot:'',
}

export const rootSelectorSlice = createSlice({
    name: 'rootSelector',
    initialState,
    reducers:{
        selectRoot: (state, action)=>{
            let thisRoot = action.payload
            state.rawRoot = thisRoot
            thisRoot = thisRoot.slice(0,thisRoot.length-1)
            state.root = thisRoot
        },
        clearRoot: (state)=>{
            state.root = ''
            state.rawRoot = ''
        },
    }
})

export const { selectRoot, clearRoot } = rootSelectorSlice.actions

export default rootSelectorSlice.reducer
