import React, { Component } from 'react';
import './EntryPractice.scss'
import Axios from 'axios';
import QuestionRadio from '../../../components/QuestionRadio/QuestionRadio';
import Countdown from '../../../components/Countdown/Countdown';
import praticApi from '../../../api/practiceApi'
import axios from 'axios';
class EntryPractice extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            path: window.location.pathname,
            result: {},
            displayResult: false,
            displayCorrect: false,
            displayTiming: true,
            point: 0
        }

        this.radioOnchange = this.radioOnchange.bind(this);
    }

    radioOnchange(event){
        var result = {...this.state.result};
        result[event.target.name] = event.target.value;
        this.setState({result: result});
    }

    componentDidMount(){
        praticApi.getdata(this.state.path).then((res) => {
            this.setState({data: res.data});
        })
    }

    finishExam = (e) => {
        if(e) e.preventDefault();
        
        const {data, result} = this.state;
        let point = 0;
        for(let item of data) {
            if(result[`${item.id}`] === item.result) {
                let styleLabel = document.getElementById(item.id + '.' + result[`${item.id}`]).parentNode.style;
                styleLabel.backgroundColor = "#d4edda";
                styleLabel.color = "#155724";
                point++;
            }
            else if(result[`${item.id}`]){
                let styleLabel = document.getElementById(item.id + '.' + result[`${item.id}`]).parentNode.style;
                styleLabel.backgroundColor = "#f8d7da";
                styleLabel.color = "#721c24";
            }
        }
        let user = JSON.parse(sessionStorage.getItem("user"))
        let listid=this.state.path.split("/")
        let practice_id=listid[listid.length-1]
        axios.post(`http://localhost:8080/point/${user.id}`,{practice_id:practice_id,point:point})
        this.setState({point: point, displayResult: true, displayCorrect: true});
    }

    displayResult = (e) => {
        e.preventDefault();
        this.setState({displayResult: false, displayTiming: false});
    }

    render() {
        let path = this.state.path;
        var arrPath = path.split('/');
        arrPath.splice(arrPath.length - 1, 1);
        path = arrPath.join('/');
        let tt=`${this.state.data.length}`
        return (
            <div className="entry-practice">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 practice-content">
                            <div className="router">
                                <a href="/"> {arrPath[2]} </a><span> > </span>
                                <a href={'/' + arrPath[1]}> {arrPath[1]} </a> <span> > </span>
                                <a href={path}> {arrPath[3]} </a>
                            </div>
                            <h2 className="text-center">Practice Exam</h2>
                            <div style={this.state.displayResult ? {display: 'block'} : {display: 'none'}}>
                                <h3 >Result: {` ${this.state.point}/${this.state.data.length}`} </h3>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: this.state.point * this.state.data.length + "%"}} role="progressbar" aria-valuenow={this.state.point} aria-valuemin="0" aria-valuemax={tt}></div>
                                </div>
                                <a href="" onClick={this.displayResult} style={{fontSize: "1.2rem", marginTop: 20}}>Review your assignment</a>
                            </div>
                            <div style={this.state.displayResult ? {display: 'none'} : {display: 'block'}}>
                                {this.state.data.length ? this.state.displayTiming && <Countdown time={300} callback={this.finishExam} /> : ''}
                                <p className="title-entry-practice"> 質問を注意深く読み、最も正確な答えを選択してください。</p>
                                <div 
                                    className="text-center" 
                                    style={this.state.data.length === 0 ? {display: 'block'} : {display: 'none'}}
                                >
                                    <div className="spinner-border text-primary m-5" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                                
                                {this.state.data.map((item, index) => (
                                    <div  key={item.id}>
                                        <QuestionRadio item={item} id={item.id} index={index} radioOnchange={this.radioOnchange} />
                                        <p 
                                            style={this.state.displayCorrect ? {display: 'block'} : {display: 'none'}} 
                                            className="correct"
                                        >
                                            <span>Corect answer: </span> {item["answer" + item.result]} 
                                        </p>
                                    </div>
                                ))}

                                <div style={this.state.displayCorrect ? {display: 'none'} : {display: 'block'}}>
                                    <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
                                    Finish
                                    </button>

                                    {/* Modal */}
                                    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Confirm submission</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    If you are sure with your work, press the finish button
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary mr-3" data-dismiss="modal">Back to exam</button>
                                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.finishExam}>Finish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    className="btn btn-primary"
                                    style={this.state.displayCorrect ? {display: 'block'} : {display: 'none'}}
                                >
                                    <a href={path} style={{color: '#fff', textDecoration: 'none'}}>Practice more...</a>
                                </button>

                                <div className="practice-footer">

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EntryPractice;