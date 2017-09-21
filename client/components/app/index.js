import Styles from './index.scss'
import React, { Component } from 'react'
import Dashboard from '../dashboard'
import Artlist from '../artlist'
import Artcontent from '../artcontent'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ Styles.main }>
                <div className={ Styles.headerContent}>
                    <div className={ Styles.mainContent }>
                        <input type="text" placeholder="搜索"></input>

                    </div>
                </div>
                <div className={ Styles.mainContent }>
                    <div className={ Styles.sidebarContent }>
                        <Dashboard/>
                    </div>
                    <div className={ Styles.rightMainContent }>
                        <Artlist/>
                        <Artcontent/>
                    </div>
                </div>
            </div>
        )
    }
}