import { createSlice } from "@reduxjs/toolkit"

const initialState={
    selectedNotes:[],
    thisNote:'',
    thisRawNote:'',
    thisOctave:0
}

export const noteSelectorSlice = createSlice({
    name: 'noteSelector',
    initialState,
    reducers:{
        selectNote: (state, action)=>{
            let thisNote = action.payload
            state.thisRawNote = thisNote
            let shortNote = thisNote.substr(0,thisNote.length-1)
            let octave = thisNote.substr(thisNote.length-1)
            state.thisNote = shortNote
            state.thisOctave = parseInt(octave)
            state.selectedNotes.push(shortNote)
        },
        clearNote: (state)=>{
            state.thisNote = ''
            state.thisRawNote =''
            state.thisOctave = 0
            state.selectedNotes = []
        },
    }
})

export const { selectNote, clearNote } = noteSelectorSlice.actions

export default noteSelectorSlice.reducer
