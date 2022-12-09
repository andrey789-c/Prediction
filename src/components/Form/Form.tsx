import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IOptions } from '../../models/IOptions'
import { IQuestion } from '../../models/IQuestions'
import { optionSlice } from '../../store/reducers/optionsSlice'
import { questionSlice } from '../../store/reducers/questionSlice'

import './index.css'

const Form = () => {
    const {options} = useAppSelector(state => state.optionReducer)
    const [name, setName] = useState('')
    const [question, setQuestion] = useState('')
    const [prediction, setPrediction] = useState('')
    const [error, setError] = useState('')
    const dispatch = useAppDispatch()

    const submitHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        if(prediction.length < 2) {
            setError('Введите минимум 2 символа..')
            return false
        }
        if(options.length >= 10) {
            setError('Нельзя добавить больше, чем 10 вариантов :(')
            setPrediction('')
            return false
        }

        const NewPrediction:IOptions = {
            id: Math.random(),
            predictions: prediction
        }
        setPrediction('')
        setError('')
        dispatch(optionSlice.actions.addPredictions(NewPrediction))
    }

    const submitForm = (e: React.MouseEvent) => {
        e.preventDefault()

        if(!name.length || !question.length || options.length < 2) {
            alert('Введите все поля')
            return false
        }

        const newQuestion: IQuestion = {
            id: Math.random(),
            name,
            question,
            options
        }
        setError('')
        dispatch(questionSlice.actions.addQuestion(newQuestion))
        setName('')
        setQuestion('')
    }
    
    return (
        <form >
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Введите имя' className='form__input'/>
            <input type="text" value={question} onChange={e => setQuestion(e.target.value)} placeholder='Что вы хотите узнать?' className='form__input'/>
            <form >
                <input type="text" value={prediction} onChange={e => setPrediction(e.target.value)} placeholder='Добавьте ваши варианты' className='form__input last'/>
                <button onClick={submitHandler} className='form__button'>Добавить вариант</button>
            </form>
            <button onClick={submitForm} className='form__button generate'>Сгенерировать ответ</button>
            
            <div className='error'>{error}</div>
        </form>
    )
}
export default Form