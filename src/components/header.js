import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <h1 className="headerTitle">Rocket Dashboard</h1>
                <div className="backendNavigation">
                    <div className="navigation">
                        <Link to="/">
                            <h3>View Blog</h3>
                        </Link>
                        <Link to="/create">
                            <h3>Create Post</h3>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header