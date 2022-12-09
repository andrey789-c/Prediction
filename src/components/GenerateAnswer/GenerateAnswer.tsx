import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IOptions } from '../../models/IOptions'
import { IQuestion } from '../../models/IQuestions'
import { optionSlice } from '../../store/reducers/optionsSlice'
import { questionSlice } from '../../store/reducers/questionSlice'
import './index.css'

const GenerateAnswer = () => {
    const dispatch = useAppDispatch()

    const {question} = useAppSelector(state => state.questionReducer)
    const [randomAnswer, setRandomAnswer] = useState<IOptions | null>(null)

    useEffect(() => {
        if(question?.options) {
            const i = Math.floor(Math.random() * question?.options.length)
            setRandomAnswer(question.options[i])
        }
        
    }, [question])

    const removeFilter = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(questionSlice.actions.removeAllQuestions())
        dispatch(optionSlice.actions.removeAllPredictions())
    }

    return (
        <div className='answer'>
            <span className='answer-bold'>{question?.name}</span>, ваш ответ: {randomAnswer?.predictions}    
            <button onClick={removeFilter} className='form__button generate'>Ввести новое значение</button>       
        </div>
    )
}
export default GenerateAnswer

