import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import DUMMY_DATA from '../data/foodData';

interface Menu {
    id: number; title: string;
    dishes:
    { id: number;
        title: string;
        price: number;
        description: string;
        imageLink: string;
    }[];
};


// Could add boolean to interface to show if menus were already loaded -> Display loading spinner instead
export interface CounterState extends Array<Menu> {
};




//const response =  fetch('https://react-http-6b4a6.firebaseio.com/movies.json');
//const data = response.json();
const url = "https://digital-menu-7d340-default-rtdb.europe-west1.firebasedatabase.app/menus.json";
const fetchedData = fetch(url);

const response = fetchedData
    .then(response => response.json());
Promise.resolve(response)

//console.log("Results:", response.results)

//const parsed = JSON.parse(response);


//const initialState: CounterState = fetchedData.then(response => response.json<CounterState>());
type TestType = { hello: string };
interface TestInterface { hello: string }
//const testState = fetchedData.then(response => response.json<TestType>());
//const initialState: CounterState = DUMMY_DATA;
const initialState: CounterState = [];

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        printIntrada(){ console.log("Intrada") },
        replaceMenus(state, action){
            // not sure why a return is needed, maybe try to not set the sate but a prop of the state
            // eg. a menus prop nested in the state
            // CounterState = { menus: [] }
            return action.payload;
            state = action.payload;
            console.log("New State: ", action.payload)
            console.log("updated State!")
        }
    },
})

// Action creators are generated for each case reducer function
export const menuActions = menuSlice.actions

export default menuSlice.reducer