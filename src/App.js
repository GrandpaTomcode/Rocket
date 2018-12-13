import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css'
import Home from './components/home'
import Backend from './components/backend'
import Create from './components/createPost'
import Error from './components/error'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/backend" component={Backend} />
                        <Route path="/create" component={Create} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
