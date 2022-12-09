import React, { FC } from 'react'
import { IQuestion } from '../../models/IQuestions'

interface HistoryQuestionsProps {
    questions: IQuestion[]
}

const HistoryQuestions: FC<HistoryQuestionsProps> = ({questions}) => {
    return (
        <div>
            <h3>История вопросов:</h3>
            {questions.map(question => (
                <div>
                    
                </div>
            ))}
        </div>
    )
}
export default HistoryQuestions