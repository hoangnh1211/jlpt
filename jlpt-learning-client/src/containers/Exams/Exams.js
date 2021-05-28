import React, { Component } from 'react';
import "./Exam.scss";

import KotobaAndBunbo from './KotobaAndBunbo';
import Dokkai from './Dokkai';
import Chokai from './Chokai';

class Exams extends Component {
    constructor(props){
        super(props);
        this.state = {
            progress: 0,
            result: {}
        };

        this.radioOnchange = this.radioOnchange.bind(this);
        
    }

    radioOnchange(event){
        var result = {...this.state.result};
        result[event.target.name] = event.target.value;
        this.setState({result: result});
    }

    finishButton = () => {
        this.setState({progress: this.state.progress + 1})
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        console.log(this.state.result);
    }
    
    render() {
        return (
            <div className="test" id="test">
                {
                    this.state.progress === 0 ? 
                        <KotobaAndBunbo radioOnchange={this.radioOnchange} finishButton={this.finishButton} /> :
                    this.state.progress === 1 ?
                        <Dokkai radioOnchange={this.radioOnchange} finishButton={this.finishButton} /> :
                        <Chokai />
                }
{/* ------------------------------------dokkai-------------------------------------------------------------------- */}

                
            </div>
        );
    }
}

export default Exams;