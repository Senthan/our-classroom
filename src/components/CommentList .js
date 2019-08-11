import React, { Component } from 'react'
import Comment from './Comment';

export default class CommentList  extends Component {

    data = [
        {id: 1, author: "Pete Hunt", text: "This is one comment"},
        {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
      ];

    render() {
        var commentNodes = this.data.map(function(comment) {
            return (
              <Comment author={comment.author} key={comment.id}>
                {comment.text}
              </Comment>
            );
          });
          return (
            <div className="commentList">
              {commentNodes}
            </div>
          );
    }
}
