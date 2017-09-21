import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

export default class ArtContent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const input = '# This is a header\n\nAnd this is a paragraph';
        return (
            <ReactMarkdown source={ input }/>
        )
    }
}