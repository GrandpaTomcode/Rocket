import React from 'react'
import { fire } from './config'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

export class Backend extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'First State'
        }
    }

    componentDidMount() {
        const rootRef = fire.database().ref()
        const post = rootRef.child('posts').orderByKey()
        post.once('value', snap => {
            snap.forEach(childNodes => {
                this.setState({
                    id: childNodes.key,
                    title: childNodes.val().title,
                    body: childNodes.val().body
                })
            })
        })
    }
    render() {
        return (
            <div>
                <div className="backendNavigation">
                    <Navigation />
                    <Link to="/create">
                        <h2>Create Post</h2>
                    </Link>
                </div>

                <h1>Title: {this.state.title} </h1>
            </div>
        )
    }
}

export default Backend
