import React, { Component } from 'react'
import Styles from './index.scss'

class ArtItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( 
            <div className={ Styles.artItem }>
                <ul>
                    <li>
                        <div className={ Styles.mainContent }>
                            <span className={ Styles.time }>2017-09-09</span>
                            <span className={ Styles.title }>什么是工程师文化?</span>
                            <span className={ Styles.read }>(1923 人阅读)</span>
                            <div className={ Styles.summaryContent }>
                                <span className={ Styles.summary }>node</span>
                                <span className={ Styles.summary }>js</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={ Styles.mainContent }>
                            <span className={ Styles.time }>2017-09-09</span>
                            <span className={ Styles.title }>什么是工程师文化?</span>
                            <span className={ Styles.read }>(1923 人阅读)</span>
                            <div className={ Styles.summaryContent }>
                                <span className={ Styles.summary }>js</span>
                                <span className={ Styles.summary }>mysql</span>
                                <span className={ Styles.summary }>redis</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default class ArtList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ArtItem/>
            </div>
        )
    }
}