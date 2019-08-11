import React, { Component } from 'react'

export default class CommentForm  extends Component {
    state={
        author: '',
        text: ''
      }
      getInitialState() {
        return {author: '', text: ''};
      }
      handleAuthorChange(e) {
          console.log('this.state ', this.state ,'e', e);
        this.state.author = e.target.value;
      }
      handleTextChange(e) {
        this.state.text = e.target.value;
      }
    handleSubmit(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
          return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
      }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
            <input
              type="textarea"
              placeholder="Say something..."
              value={this.state.text}
              onChange={this.handleTextChange}
            />
            <input type="submit" value="Post" />
          </form>
        )
    }
}
