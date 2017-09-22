import Styles from './index.scss'
import React, { Component } from 'react'
import Dashboard from '../dashboard'
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom'
import Artlist from '../artlist'

export default class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={ Styles.mainContent }>
                    <div className={ Styles.sidebarContent }>
                        <Dashboard/>
                    </div>
                    <div className={ Styles.rightMainContent }>
                        <Router>
                            <Route path="/home" component={ Artlist }/>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}