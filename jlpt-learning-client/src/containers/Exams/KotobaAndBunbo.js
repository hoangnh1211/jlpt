import React, { Component } from 'react';
import QuestionRadio from '../../components/QuestionRadio/QuestionRadio';
const axios = require('axios');

class KotobaAndBunbo extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        axios.get('https://3zly0.sse.codesandbox.io/KotobaAndBunbo/').then((res) => {
            this.setState({data: res.data});
        })
    }

    render() {
        const {part1, part2, part3, part4} = this.state.data;
        return (
            part1 ? <div className="row">
                <div className="col-md-12 text-center test__header">
                        <h2>N5</h2>
                        <h3>げんごちしき（もじ・ごい）</h3>
                        <p>（25ぷん）</p>
                    </div>

                    {/* Mondai 1 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題1: ＿＿＿の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。</h4>

                        {part1.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 2 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題2: ＿＿＿の言葉を漢字で書く時、最もよいものを、1・2・3・4から一つ 選びなさい。</h4>

                        {part2.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 3 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題3: （　　　）に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。</h4>

                        {part3.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 4 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題4: ＿＿＿の言葉に意味が最も近いものを、1・2・3・4から一つ選びなさい。</h4>

                        {part4.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}

                        <div className="text-right m-5">
                            <div className="btn btn-primary" onClick={this.props.finishButton}>Finish</div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
            </div> : ''
        );
    }
}

export default KotobaAndBunbo;