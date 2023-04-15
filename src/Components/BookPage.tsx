import React from 'react'
import { useLocation } from 'react-router-dom'
import { bookInfo } from '../type'

export default function BookPage() {
    const location = useLocation()
    const data: bookInfo = location.state

    return (
        <div>
            
        </div>
    )
}
