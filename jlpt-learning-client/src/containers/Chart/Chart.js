import React, { Component } from 'react';
import './Chart.scss';
import { Row, Col } from 'react-bootstrap';
import CardUserTop from '../../components/CardUserTop/CardUserTop';

const topN1 = [
    {
        name: "Tony Chakafalow",
        point: 150
    },
    {
        name: "Tony Cross",
        point: 146
    },
    {
        name: "Tanaka Shyumi",
        point: 138
    },
    {
        name: "Yamada sensei",
        point: 135
    },
    {
        name: "Bruh Bruh",
        point: 129
    }
]

class Chart extends Component {
    render() {
        return (
            <div className="chart">
                <Row className="chart__row">
                    <Col className="chart__n1__title"><h4>Level N1</h4></Col>
                    {
                        topN1.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                    }
                </Row>

                <Row className="chart__row">
                    <Col className="chart__n2__title"><h4>Level N2</h4></Col>
                    {
                        topN1.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                    }
                </Row>

                <Row className="chart__row">
                    <Col className="chart__n3__title"><h4>Level N3</h4></Col>
                    {
                        topN1.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                    }
                </Row>

                <Row className="chart__row">
                    <Col className="chart__n4__title"><h4>Level N4</h4></Col>
                    {
                        topN1.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                    }
                </Row>

                <Row className="chart__row">
                    <Col className="chart__n5__title"><h4>Level N5</h4></Col>
                    {
                        topN1.map(user => {
                            return <Col> <CardUserTop user={user} /> </Col>
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default Chart;