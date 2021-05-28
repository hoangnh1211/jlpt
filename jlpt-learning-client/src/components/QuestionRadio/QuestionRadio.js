import React, { Component } from 'react';
import './QuestionRadio.scss'

function convertKandi(str){
    if(str.includes('*') === false) return str;
    let arr = str.split('*');
    return (
    <span>{arr[0] + ' '} <u>{arr[1]}</u> {' ' +arr[2]}</span>
    );
}

class QuestionRadio extends Component {
    
    render() {
        return (
            <div className="radio">
                <p> {this.props.children} </p>
                <div className="question">
                    <span className="radio__index"> {this.props.index + 1} </span>
                    {convertKandi(this.props.item.question)}
                </div>
                <div className="answer" onChange={this.props.radioOnchange}>
                    <label htmlFor={this.props.id + '.1'} style={{display: 'block'}} className="radio__radio">
                        <input type="radio" name={this.props.id} id={this.props.id + '.1'} className="radio__hidden" value="1"/>
                        <span className="radio__label"></span>
                        <span className="radio__content"> {this.props.item.answer1} </span>
                    </label>
                    <label htmlFor={this.props.id + '.2'} style={{display: 'block'}} className="radio__radio">
                        <input type="radio" name={this.props.id} id={this.props.id + '.2'} className="radio__hidden" value="2" />
                        <span className="radio__label"></span>
                        <span className="radio__content"> {this.props.item.answer2} </span>
                    </label>
                    <label htmlFor={this.props.id + '.3'} style={{display: 'block'}} className="radio__radio">
                        <input type="radio" name={this.props.id} id={this.props.id + '.3'} className="radio__hidden" value="3" />
                        <span className="radio__label"></span>
                        <span className="radio__content"> {this.props.item.answer3} </span>
                    </label>
                    <label htmlFor={this.props.id + '.4'} style={{display: 'block'}} className="radio__radio">
                        <input type="radio" name={this.props.id} id={this.props.id + '.4'} className="radio__hidden" value="4" />
                        <span className="radio__label"></span>
                        <span className="radio__content"> {this.props.item.answer4} </span>
                    </label>
                </div>
            </div>
        );
    }
}

export default QuestionRadio;