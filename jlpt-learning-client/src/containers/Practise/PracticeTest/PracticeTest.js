import React, { Component } from 'react';
import './PracticeTest.scss'
import Axios from 'axios';
import praticApi from '../../../api/practiceApi'

class PracticeTest extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            path: window.location.pathname
        }
    }

    componentDidMount(){
        praticApi.getdata(this.state.path).then((res) => {
            console.log(res.data);
            this.setState({data: res.data});
        })
    }

    render() {
        const {data, path} = this.state;
        const title = path.split('/').join(" ");
        return (
            <div className="practice-test">
                <div className="container">
                    <h2>{title}</h2>
                    <div 
                        className="text-center" 
                        style={data.length === 0 ? {display: 'block'} : {display: 'none'}}
                    >
                        <div className="spinner-border text-primary m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    {data.length ? <div className="row practice-list">
                        
                        {data.map((item, index) => (
                            <div className="practice-item col-md-12" key={item.id}>
                                <div className="d-flex justify-content-around align-items-center">
                                <h5>Exam number {` ${++index}`}</h5>
                                    <button className="btn btn-primary">
                                        <a href={path + '/' + item.id}>Practice now</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div> : ''}
                </div>
            </div> 
        );
    }
}

export default PracticeTest;