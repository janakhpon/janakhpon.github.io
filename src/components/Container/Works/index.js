import React, { Component } from 'react'
import './index.css'

export default class Works extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="works">
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">AI Projects</h3>
                            <div className="subheading mb-3">collections of AI</div>
                            <p>Most of the AI projects are built by Tensorflow,keras and popular python libraries such as Numpy, Pandas, Matplot, seaborn and mostly in Jupyter Notebook.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">VIEW AI PROJECTS</a></span>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Fullstack Application Development</h3>
                            <div className="subheading mb-3">fully fleged web app projects collection</div>
                            <p>Most of Fullstack projects are built by Django,Flask,NodeJS(NextJS,ExpressJS) as backend and React,Vue,Angular and normal template engine as frontend.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">VIEW FULLSTACK PROJECTS</a></span>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Design library Development</h3>
                            <div className="subheading mb-3">Fully scalable to responsiveness & Rich UI/UX design templates </div>
                            <p>UI/UX design library for future projects are built using SASS/SCSS, CSS3 and HTML5 and a combination other popular design libraries.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">VIEW DESIGN LIBRARIES PROJECTS</a></span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Crossed Platform Application Development</h3>
                            <div className="subheading mb-3">fully fleged features Application & Data driven Application</div>
                            <p>Crossed Platform Application are targeting to Linux,Windows and Mac Operating System and are built using ElectronJS. </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">VIEW OS APPLICATION PROJECTS</a></span>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Mobile Application Development</h3>
                            <div className="subheading mb-3"> Rich features and Data driven Application </div>
                            <p>Mobile Applications are usually developed by using ReactNative and a variety of Database including NoSQL and SQL mostly as client side app.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">VIEW MOBILE APPLICATION PROJECTS</a></span>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}