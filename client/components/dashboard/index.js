import Styles from './index.scss'
import React, { Component } from 'react'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ Styles.mainContent }>
                <div className={ Styles.brannerContent }>
                    Video++
                </div>
                
                <div className={ Styles.infoContent }>
                    <div className={ Styles.avatarContent}>
                        <div className={ Styles.avatar }></div>
                    </div>
                    <div className={ Styles.userDetail }>
                        <ul>
                            <li>
                                <span>1040</span>
                                <span>昨日数据</span>
                            </li>
                            <li>
                                <span>1923</span>
                                <span>延迟</span>
                            </li>
                            <li>
                                <span>12321</span>
                                <span>总浏览</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={ Styles.submenuContent }>
                    <ul>
                        <li><div className={ Styles.node }></div>Node.js</li>
                        <li><div className={ Styles.mongo }></div>MongoDB</li>
                        <li><div className={ Styles.mysql }></div>Mysql</li>
                        <li><div className={ Styles.redis }></div>Redis</li>
                        <li><div className={ Styles.linux }></div>Linux</li>
                        <li><div className={ Styles.network }></div>Network</li>
                        <li><div className={ Styles.html }></div>Html</li>
                        <li><div className={ Styles.css }></div>Css</li>
                        <li><div className={ Styles.docker }></div>Docker</li>
                        <li><div className={ Styles.react }></div>React</li>
                    </ul>
                </div>
            </div>
        )
    }
}