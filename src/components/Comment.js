import React, { Component } from 'react';
// import Remarkable from 'remarkable';
// import RemarkableReactRenderer from 'remarkable-react';

export default class Comment extends Component {
    
    render() {
        
        // const md = new Remarkable();
        // md.renderer = new RemarkableReactRenderer();
         
        // console.log(md.render('# Remarkable rulezz!'));
        

        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
}
