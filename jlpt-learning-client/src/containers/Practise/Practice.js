import React, { Component } from 'react';
import './Practice.scss'

class Practice extends Component {
    render() {
        return (
            <div className="practice">
                <h2 className="practice-title text-center">Practice to success</h2>
                <div className="container practice-container">
                    
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="n5-practice practice-category">N5</h3>
                        </div>
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N5/vocabulary">Vocabulary</a></div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N5/kanji">Kanji</a></div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N5/grammar">Grammar</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="n4-practice practice-category">N4</h3>
                        </div>
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N4/vocabulary">Vocabulary</a></div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N4/kanji">Kanji</a></div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N4/grammar">Grammar</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="n3-practice practice-category">N3</h3>
                        </div>
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N3/vocabulary">Vocabulary</a></div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N3/kanji">Kanji</a></div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N3/grammar">Grammar</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="n2-practice practice-category">N2</h3>
                        </div>
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N2/vocabulary">Vocabulary</a></div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N2/kanji">Kanji</a></div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N2/grammar">Grammar</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="n1-practice practice-category">N1</h3>
                        </div>
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N1/vocabulary">Vocabulary</a></div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N1/kanji">Kanji</a></div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-practice">
                                <div className="btn btn-default btn-practice"><a href="/practice/N1/grammar">Grammar</a></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Practice;