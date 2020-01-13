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
                            <h3 className="mb-0">Team Leader at GTG(Greentech Innovation Group)</h3>
                            <div className="subheading mb-3">Coding Community & Knowledge Sharing Platform</div>
                            <p> Greentech Innovation Group was formed by me and my classmates since 2017 to share our Knowledge about IT technology to junior students and group members and it's also a coding commnutiy for helping coders overcome their errors and problems.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Jan 2016 - Present</span>
                        </div>
                    </div>



                    {
                        /**
                         * 
                         * <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="resume-content">
                                <h3 className="mb-0">Fullstack Engineer at GTG(Greentech Innovation Group)</h3>
                                <div className="subheading mb-3">Website Building Company</div>
                                <p>Building Fullstack web app for Shop, supermarkets and a variety of market demanding products.</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">July 2017 - December 2018</span>
                            </div>
                            </div>
                         */
                    }

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div className="resume-content">
                            <h3 className="mb-0">Web Design Collaboration</h3>
                            <div className="subheading mb-3">Recruting and Collaboration</div>
                            <p>Collaboratively participate in University Web Development Bootcamp for Basic Web Design and group based Knowledge sharing. </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">September 2015 - December 2015</span>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}