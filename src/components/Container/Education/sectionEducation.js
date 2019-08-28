import React, { Component } from 'react'
import './sectionEducation.css'


export default class Education extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="w-100">
                    <h2 className="mb-5">Education</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Technological University of Mawlamyine</h3>
                            <div className="subheading mb-3">Bachelor of Engineering </div>
                            <div>Specialized at Information Technology</div>
                            <p>GPA: 3.23</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">August 2014 - May 2020</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div className="resume-content">
                            <h3 className="mb-0">NO(9) BEHS , National School</h3>
                            <div className="subheading mb-3">General Education Program</div>
                            <p>GPA: 3.56</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">August 2002 - May 2013</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">ANNUAL IELTS EXAMINATION TEST</h3>
                            <div className="subheading mb-3">Band 7 </div>
                            <div>Specialized at Engineering</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Sep - 2018</span>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}