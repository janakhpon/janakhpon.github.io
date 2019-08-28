import React, { Component } from 'react'
import './sectionExperience.css'

export default class Experience extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Lead Developer at GTG(Greentech Innovation Group)</h3>
                            <div className="subheading mb-3">Market solution & fully fleged software production</div>
                            <p>Bring software solution based on market needs and manage projects to make client fully satisfied for their products</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">March 2018 - Present</span>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Fullstack Engineer at GTG(Greentech Innovation Group)</h3>
                            <div className="subheading mb-3">Website Building Company</div>
                            <p>Building Fullstack web app for Shop, supermarkets and a variety of market demanding products.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">July 2017 - December 2018</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div className="resume-content">
                            <h3 className="mb-0">Web Design Collaboration (Github)</h3>
                            <div className="subheading mb-3">Recruting and Collaboration</div>
                            <p>Collaboratively participate in version based projects for WDC's templates and theme</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">September 2016 - June 2017</span>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}