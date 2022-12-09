import { IOptions } from "../../models/IOptions"
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface OptionsState {
    options: IOptions[],
}

const initialState: OptionsState = {
    options: [],
}

export const optionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        addPredictions(state, action: PayloadAction<IOptions>) {
            state.options = [...state.options, action.payload]
        },
        removeAllPredictions(state) {
            state.options = []
        }
    }    
})

export default optionSlice.reducer