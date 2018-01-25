import React, { Component } from 'react';

export default class SearchBar extends Component {

    state = { sentence: '' }

    handleFieldText = (e) => this.setState({ sentence: e.target.value.trimLeft() })

    render() {
        const style = {
            input: {
                height: 200,
                width: '100%',
                fontSize: 50,
            },
            mainDiv: {
                textAlign: 'center'
            }
        }
        const {sentence} = this.state;
        return (
            <div style={style.mainDiv}>

                <input placeholder="write text" style={style.input} value={sentence} onChange={this.handleFieldText} />

                Váš text:<p style={style.input}> {sentence.toLocaleUpperCase()} </p>
            </div>
        )
    }
};