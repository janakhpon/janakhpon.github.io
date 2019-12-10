import React, { Component } from 'react'
import './sectionAwards.css'

export default class Awards extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
                <div className="w-100">
                    <h2 className="mb-5">Awards &amp; Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            YSEALI YOUTH ENTREPRENEURSHIP NOMINEE</li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            Mobile Web Specialist - Google Certification</li>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                           UDACITY FULLSTACK NANODEGREE </li>
                           
                    </ul>
                </div>
            </section>
        );
    }
}