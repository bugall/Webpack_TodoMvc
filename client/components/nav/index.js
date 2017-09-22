import React, { Component } from 'react'
import Styles from './index.scss'

export default class Nav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={Styles.headerContent}>
                <div className={Styles.mainContent}>
                    <input type="text" placeholder="搜索"></input>
                </div>
            </div>
        )
    }
}