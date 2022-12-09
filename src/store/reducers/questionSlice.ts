import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion } from "../../models/IQuestions";

interface QuestionState {
    question: IQuestion | null
}

const initialState: QuestionState = {
    question: null
}

export const questionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        addQuestion(state, action: PayloadAction<IQuestion>) {
            state.question = action.payload
        },
        removeAllQuestions(state) {
            state.question = null
        }
    }
})

export default questionSlice.reducer