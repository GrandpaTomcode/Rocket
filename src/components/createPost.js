import React from 'react'
import Navigation from './Navigation'
import { fire } from './config'

class Create extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            body: '',
            date: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const postRef = fire.database().ref('posts')
        var dt = new Date()
        var utcDate = dt.toUTCString()
        const post = {
            title: this.state.title,
            body: this.state.body,
            date: utcDate
        }
        postRef.push(post)
        this.setState({
            title: '',
            body: '',
            date: ''
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="headerTitle">Rocket Dashboard</h1>
                    <Navigation />
                </div>

                <section>
                    <form onSubmit={this.handleSubmit} className="createPost">
                        <input
                            type="text"
                            name="title"
                            autoComplete="off"
                            placeholder="Title"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                        <textarea
                            type="text"
                            name="body"
                            placeholder="Create Post"
                            onChange={this.handleChange}
                            value={this.state.body}
                        />
                        <button className="subBtn">Submit Post</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default Create
