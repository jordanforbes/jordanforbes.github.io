import React from 'react';
import { createSlice } from "@reduxjs/toolkit";
import { Scale, ChordType } from '@tonaljs/tonal'

const initialState ={
    scale: 'E chromatic'
}

export const counterSlice = createSlice({
    name: 'groupList',
    initialState,
    reducers:{

    }
})
