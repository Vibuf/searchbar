import React, { Component } from 'react';

export default class searchbar extends Component {

    state = { sentence: ''}

    Handle = (e) => this.setState({sentence: e.target.value.trimLeft()}) 

    render() {
        const styleS = {
            height: 200,
            width: '100%',
            fontSize: 50,
            textAlign: 'center'
        }
        const mainDiv = {
            textAlign: 'center'
        }

        return (
        <div style={mainDiv}>
            
            <input placeholder="write text" style={styleS} value={this.state.sentence} onChange={this.Handle.bind(this)}/>

            Váš text:<p style={styleS}> {this.state.sentence.toLocaleUpperCase()} </p>            
        </div>
        )
  }
};