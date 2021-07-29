import React, { Component } from 'react';

class Subject extends Component {
    render(){
      return(
        <ul>
            <li href="/create" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('create');
            }.bind(this)}>create</li>
            <li href="/update" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('update');
            }.bind(this)}>update</li>
            <li onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('delete');
            }.bind(this)} input='button' value="delete">delete</li>
        </ul>
      );
    }
  }

export default Subject;