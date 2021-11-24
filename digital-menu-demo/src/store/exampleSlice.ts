import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const primaryText = "Hello";
const secondaryText = "World";

export interface ExampleState {
  primaryValue: boolean,
  text: string
}

const initialState: ExampleState = {
  primaryValue: true,
  text: primaryText
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    switchToPrimary: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.primaryValue = true;
      state.text = primaryText;
    },
    switchToSecondary: (state) => {
        state.primaryValue = true;
        state.text = primaryText;
    },
    switchToPrimaryWithText: (state, action: PayloadAction<string>) => {
        state.primaryValue = true;
        state.text = action.payload;
    },
    switchToSecondaryWithText: (state, action: PayloadAction<string>) => {
        state.primaryValue = false;
        state.text = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const exampleActions = exampleSlice.actions

export default exampleSlice.reducer