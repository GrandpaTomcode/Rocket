import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/">
                <h3>View Blog</h3>
            </Link>
            <Link to="/backend">
                <h3>Backend</h3>
            </Link>
        </div>
    )
}

export default Navigation
