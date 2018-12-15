import React from 'react'
import Navigation from './Navigation'
import { fire } from './config'
import '../css/App.css'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            posts:
            {
                id: '',
                title: 'First State',
                body: 'First State',
                date: '13/12/2018'
            }
        }
    }

    componentDidMount() {
        const rootRef = fire.database().ref()
        const post = rootRef.child('posts').orderByKey()
        var connectedRef = fire.database().ref('.info/connected')
        connectedRef.on('value', function (snap) {
            if (snap.val() === true) {
                console.log('connected')
            } else {
                console.log('not connected')
            }
        })
        post.once('value', snap => {
            snap.forEach(childNodes => {
                this.setState({
                    id: childNodes.key,
                    title: childNodes.val().title,
                    body: childNodes.val().body,
                    date: childNodes.val().date
                })
                console.log(this.state.id)
                console.log(this.state.title)
                console.log(this.state.date)
                console.log(this.state.body)
            })

        })
    }
    render() {
        const listOfPosts = Object.keys(this.state.posts).map(key =>
            <div className="posts">
                <h1 key={key.id}>{this.state.title}</h1>
                <p key={key.id}>{this.state.date}</p>
                <p key={key.id}>{this.state.body}</p>
            </div>
        )
        console.log(listOfPosts)
        return (
            <div>
                <div className="header">
                    <h1 className="headerTitle">Rocket</h1>
                </div>
                <Navigation />
                <div>{listOfPosts}</div>
            </div>

        );


    }
}

export default Home
