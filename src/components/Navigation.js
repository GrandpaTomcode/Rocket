import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to="/backend">
                <h2>Backend</h2>
            </Link>
        </div>
    )
}

export default Navigation
