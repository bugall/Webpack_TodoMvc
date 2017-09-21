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
                <div className={ Styles.submenuContent }>
                    <ul>
                        <li>Home</li>
                        <li>Article</li>
                        <li>About</li>
                    </ul>
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
            </div>
        )
    }
}