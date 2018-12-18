import React from 'react'
import { Link } from 'react-router-dom'
import { fire } from './config'
import '../css/App.css'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
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
            const posts = snap.val()
            const newState = []
            for (let post in posts)
                newState.push({
                    id: post,
                    title: posts[post].title,
                    date: posts[post].date,
                    body: posts[post].body,
                })
            this.setState({
                posts: newState.reverse()
            })
            console.log(newState)
        })

    }


    render() {


        return (
            <div>
                <div className="header">
                    <h1 className="headerTitle">Rocket</h1>
                    <div className="navigation">
                        <Link to="/signIn">
                            <h3>Sign In</h3>
                        </Link>
                    </div>
                </div>

                <section>
                    <div>
                        <ul>
                            {this.state.posts.map(post => {
                                return (
                                    <li className='posts' key={post.id}>
                                        <h1>{post.title}</h1>
                                        <p className="postDate">{post.date}</p>
                                        <p>{post.body}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>

        );


    }
}

export default Home
