import React from 'react'
import { fire } from './config'
import Header from './header'

export class Backend extends React.Component {
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
    removeItem(postsId) {
        const post = fire.database().ref(`/posts/${postsId}`);
        post.remove()
        window.location.reload()
    }
    render() {
        return (
            <div>
                <Header className="backendHeader" />
                <div className="listOfPostsHeader"><h1>List Of Posts</h1></div>
                <div className="listOfPosts">
                    <ul>
                        {this.state.posts.map(post => {
                            return (
                                <div>
                                    <li className='backendPosts' key={post.id}>
                                        <h1>{post.title}</h1>
                                        <p className="postDate">{post.date}</p>
                                        <button onClick={() => this.removeItem(post.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /><path d="M0 0h24v24H0z" fill="none" /></svg> </button>
                                    </li>

                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Backend
