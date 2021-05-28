import React, { Component } from 'react';
import './CardUserTop.scss';

class CardUserTop extends Component {
    render() {
        return (
            <div className="d-flex card-user">
                <img src="https://img.icons8.com/carbon-copy/2x/user.png" height={50} alt=""/>
                <div>
                    <h4> {this.props.user.name} </h4>
                    <p>Result: {this.props.user.point} / 180</p>
                </div>
            </div>
        );
    }
}

export default CardUserTop;