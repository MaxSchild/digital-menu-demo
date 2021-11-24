import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store/store'
import {exampleActions} from "../store/exampleSlice";
import { useEffect, useState } from "react-transition-group/node_modules/@types/react";


const ReduxExample = () => {
    const dispatch = useDispatch();

    const switchToPrimaryHandler = () => {
        dispatch(exampleActions.switchToPrimary())
    };
    const switchToSecondaryHandler = () => {
        dispatch(exampleActions.switchToSecondary())
    };

    //why are components, that use state never rerendered??
    const appState = useSelector((state: RootState) => state);

    console.log("values:", appState.example.primaryValue, appState.example.text)
    
    return ( 
        <div>
            <h1>redux example</h1>
            <p>{appState.example.text}</p>
            <button onClick={switchToPrimaryHandler}>Switch to primary</button>
            <button onClick={() => dispatch(exampleActions.switchToSecondary())}>Switch to secondary</button>
        </div>

    )
};


export default ReduxExample;