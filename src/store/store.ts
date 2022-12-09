import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import optionReducer from './reducers/optionsSlice'
import questionReducer from './reducers/questionSlice'

const rootReducer = combineReducers({
    optionReducer,
    questionReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']