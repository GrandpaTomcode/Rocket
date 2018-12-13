import React from 'react'
import Navigation from './Navigation'
import { fire } from './config'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            title: 'First State',
            body: 'First State',
            date: '13/12/2018'
        }
    }

    componentDidMount() {
        const rootRef = fire.database().ref()
        const post = rootRef.child('posts').orderByKey()
        post.once('value', snap => {
            snap.forEach(childNodes => {
                this.setState({
                    title: childNodes.val().title,
                    body: childNodes.val().body,
                    date: childNodes.val().date
                })
            })
            var connectedRef = fire.database().ref('.info/connected')
            connectedRef.on('value', function(snap) {
                if (snap.val() === true) {
                    console.log('connected')
                } else {
                    console.log('not connected')
                }
            })
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="headerTitle">Rocket</h1>
                </div>
                <div>
                    <Navigation />
                    <div>
                        <div className="posts">
                            <h1>{this.state.title}</h1>
                            <p>{this.state.date}</p>
                            <p>{this.state.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
