import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css'
import Home from './components/home'
import Backend from './components/backend'
import Error from './components/error'
import Navigation from './components/Navigation'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/backend" component={Backend} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
