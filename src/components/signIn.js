import React from 'react'
import rocketLogo from '../assets/rocketLogo.svg'
import { Redirect } from 'react-router-dom'
import { auth, provider } from './config'



export class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            user: null
        }
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    logout() {
        // we will add the code for this in a moment, but need to add the method now or the bind will throw an error
    }
    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user
                this.setState({
                    user
                })
                console.log(this.state.user)
            })
            .then(() => {
                return (
                    <Redirect to='/backend' />
                )
            })

    }
    render() {
        return (
            <div>
                <div className="emailFormContainer">
                    <form className="emailForm">
                        <img alt="RocketLogo" src={rocketLogo} />
                        <h1 className="emailFormTitle bold"> Sign Into Rocket </h1>
                        <input placeholder="Username" type="email" />
                        <input placeholder="Password" type="password" />
                        <button className="signInBtn">Sign In</button>
                        <div onClick={this.login} className="googleSignInBtn"></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn
