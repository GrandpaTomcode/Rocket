import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <h1 className="headerTitle">Rocket Dashboard</h1>
                <div className="backendNavigation">
                    <Navigation />
                    <Link to="/create">
                        <h3>Create Post</h3>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Header