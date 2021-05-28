import React, { Component } from 'react';
import './CardTest.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

class CardTest extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__level">N5</div>
                <h4 className="card__title">JLPT N5 practice test</h4>
                <div className="card__id">ID exam: JLPT12</div>
                <p>Time litmit: 120 munites</p>
                <a href= {"/exams/" + this.props.id}><FontAwesomeIcon icon={faAngleDoubleRight} /> Exam now</a>

            </div>
        );
    }
}

export default CardTest;