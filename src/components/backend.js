import React from 'react'
import { fire } from './config'

export class Backend extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            title: 'First State',
            body: 'First State'
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
                console.log(childNodes.val().title)
                console.log(childNodes.val().body)
            })
        })
    }
    render() {
        return (
            <div>
                <p> Backend </p>
                <h1>Title: {this.state.title} </h1>
                <h1>Body: {this.state.body} </h1>
            </div>
        )
    }
}

export default Backend
