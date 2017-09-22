import Styles from './index.scss'
import React, { Component } from 'react'
import Dashboard from '../dashboard'
import Nav from '../Nav'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ Styles.main }>
                <Nav/>
                { this.props.children }
            </div>
        )
    }
}