import React, { FC } from 'react'
import { IOptions } from '../../models/IOptions'
import './index.css'

interface ListOptionsProps {
    options: IOptions[]
}

const ListOptions: FC<ListOptionsProps> = ({options}) => {
    return (
        <ul className='list'>
            {options.map((option, i) => (
                <li key={i + 1} className='list__li'>
                    {i + 1}. {option.predictions}
                </li>
            ))}
        </ul>
    )
}
export default ListOptions