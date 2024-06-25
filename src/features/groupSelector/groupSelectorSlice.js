import { ScaleType, ChordType } from "@tonaljs/tonal"
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    root:'',
    rawRoot:'',
    selectionReady:false,
    areScales: true,
    selectedGroup:'',
    groupInterval: ''
}

export const groupSelectorSlice = createSlice({
    name: 'groupSelector',
    initialState,
    reducers:{
        selectRoot: (state, action)=>{
            let thisRoot = action.payload
            state.rawRoot = thisRoot
            state.root = thisRoot.slice(0,thisRoot.length-1)
        },
        clearRoot: (state)=>{
            state.root = ''
            state.rawRoot=''
        },

        selectGroup: (state, action)=>{
            state.selectedGroup = action.payload

            if(state.root){
                state.selectionReady = true
                // console.log('DEBUG SELECTIONREADY')
                // console.log(state.selectionReady)
                if(state.areScales){
                    state.groupInterval =  ScaleType.get(state.selectedGroup).intervals
                }else{
                    state.groupInterval =  ChordType.get(state.selectedGroup).intervals
                }

            }else{
                state.groupInterval = ['']
            }
        },
        clearGroup: (state)=>{
            state.selectedGroup = ''
            state.selectionReady = false
            // console.log('DEBUG SELECTIONREADY')
            // console.log(state.selectionReady)
        },
        swapGrouping: (state)=>{
            state.areScales = !state.areScales
        },
        setGroupMode:(state,action)=>{
            state.areScales = action.payload
        },
        reset: (state)=>{
            state.root=''
            state.rawRoot=''
            state.selectedGroup = ''
            state.selectionReady = false
            // console.log('DEBUG SELECTIONREADY')
            // console.log(state.selectionReady)
        }
    }
})

export const { getGrouping, setGroupMode, selectRoot, clearRoot,  selectGroup, clearGroup, swapGrouping, reset } = groupSelectorSlice.actions

export default groupSelectorSlice.reducer
