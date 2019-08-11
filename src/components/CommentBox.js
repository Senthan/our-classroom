import React, { Component } from 'react';
import CommentForm from './CommentForm ';
import CommentList from './CommentList ';

export default class CommentBox extends Component {
    render() {
        return (
            <div className="commentBox">
                <h1>WOO My Comment Box</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        )
    }
}
