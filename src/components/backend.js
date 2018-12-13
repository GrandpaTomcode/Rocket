import React from 'react'
import { fire } from './config'
import { Link } from 'react-router-dom'

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
                <Link to="/create">
                    <h1>Create Post</h1>
                </Link>
                <h1>Title: {this.state.title} </h1>
            </div>
        )
    }
}

export default Backend
