import React, { Component } from 'react';
import QuestionRadio from '../../components/QuestionRadio/QuestionRadio';
import Axios from 'axios';

function convertNumberHighlight(str){
    return str.replace(/%/g, '<span class="numberHighLight">').replace(/#/g, '</span>').replace(/\n/g, '<br><br>');
}

class Dokkai extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        Axios.get('https://3zly0.sse.codesandbox.io/Dokkai').then(res => {
            this.setState({data: res.data});
        })
    }

    render() {
        const {part5, part6, part7, part8, part9, part10, part11} = this.state.data;
        return (
            part5 ?
            <div className="row">
                    <div className="col-md-12 text-center test__header">
                        <h2>N5</h2>
                        <h3>言語知識 （文法）・読解</h3>
                        <p>（50ぷん）</p>
                    </div>

                    {/* Mondai 1 part 5*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題1: 次の文の（　　　）に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。</h4>

                        {this.props.part5.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 2 part 6*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題2: 次の文の　★　に入る最もよいものを、1・2・3・4から一つ選びなさい。</h4>

                        {this.props.part6.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>


                    {/* Mondai 3 part 7*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題3: 次の文章を読んで、後の問いに対する答えとして最もよいものを1・2・3・4から一つ選びなさい。</h4>
                        <p style={{lineHeight: 2}} dangerouslySetInnerHTML={{__html: convertNumberHighlight(this.props.part7.content)}}></p>
                        {this.props.part7.data.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 4 part8*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題4: 次の文章を読んで、後の問いに対する答えとして最もよいものを1・2・3・4から一つ選びなさい。</h4>

                        {this.props.part8.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange}>
                                    {item.content}
                                </QuestionRadio>
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 5 part 9*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題5: 次の文章を読んで、後の問いに対する答えとして最もよいものを1・2・3・4から一つ選びなさい。</h4>
                        <p dangerouslySetInnerHTML={{__html: convertNumberHighlight(this.props.part9.content)}}></p>
                        {this.props.part9.data.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 6 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題6: 下のページを見て、下の問いに対する答えとして最もよいものを、1・2・3・4から1つ選びなさい。</h4>

                        {this.props.part10.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.props.radioOnchange} />
                            )
                        })}

                        <div className="text-right m-5">
                            <div className="btn btn-primary" onClick={this.props.finishButton}>Finish</div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                : ''
        );
    }
}

export default Dokkai;