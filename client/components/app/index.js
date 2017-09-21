import Styles from './index.scss'
import React, { Component } from 'react'
import Dashboard from '../dashboard'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ Styles.mainContent }>
                <div className={ Styles.sidebarContent }>
                    <Dashboard/>
                </div>
                <div className={ Styles.rightMainContent }>
                </div>
            </div>
            
        )
    }
}