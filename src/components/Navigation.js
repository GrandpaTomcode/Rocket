import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/backend">Backend</Link>
        </div>
    )
}

export default Navigation