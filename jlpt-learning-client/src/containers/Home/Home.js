import React, { Component } from 'react';
import './Home.scss';
import Select from 'react-select';
import {Button, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import CardTest from '../../components/CardTest/CardTest';
import Footer from '../Footer/Footer'
import UserProvider from '../../components/UserProvider';
import UserContext from '../../contexts/UserContext';

const options = [
    { value: '1', label: 'N1' },
    { value: '2', label: 'N2' },
    { value: '3', label: 'N3' },
    { value: '4', label: 'N4' },
    { value: '5', label: 'N5' }
  ];

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null,
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div className="homepage">
                <div className="homepage__header">
                    <p className="homepage__header__title">
                        Warehouse of Japanese exam questions for free
                    </p >
                    
                    <div className="d-flex homepage__header__icon">
                        <img height="70px" src="/assets/app_store_icon.png" alt=""/>
                        <img height="70px" src="/assets/google_play_store_icon.png" alt=""/>
                    </div>
                    <br/>

                    <div className="homepage__header__sort">
                        <Select
                            className="homepage__header__select"
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            placeholder="Level"
                        />
                        <Button variant="primary" className="homepage__header__button"><FontAwesomeIcon icon={faSearch} /> Search</Button>
                    </div>
                </div>
                <div className="homepage__content">
                    <div className="homepage__content__title">
                        <div className="container">
                            <h2>Standardized test</h2>
                            <p>Standard exam questions are updated continuously</p>
                            
                        </div>
                    </div>
                    <div className="container">
                        <Row>
                            <Col md={4}>
                                <CardTest id="1" />
                            </Col>
                            <Col md={4}>
                                <CardTest id="2" />
                            </Col>
                            <Col md={4}>
                                <CardTest id="3" />
                            </Col>
                            <Col md={4}>
                                <CardTest id="1" />
                            </Col>
                            <Col md={4}>
                                <CardTest id="2" />
                            </Col>
                            <Col md={4}>
                                <CardTest id="3" />
                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;