import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import DUMMY_DATA from '../data/foodData';

interface Menu {
    id: number; title: string;
    dishes:
    { id: number; title: string; price: number; description: string; imageLink: string; }[];
};

export interface CounterState extends Array<Menu> {
};

const initialState: CounterState = DUMMY_DATA;

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        printIntrada : () => { console.log("Intrada")}
    },
})

// Action creators are generated for each case reducer function
export const { printIntrada} = menuSlice.actions

export default menuSlice.reducer