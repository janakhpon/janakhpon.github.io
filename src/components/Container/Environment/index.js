import React, { Component } from 'react'
import './index.css'

export default class Environment extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="environment">
                <div className="w-100">
                    <h2 className="mb-5">Development Environment</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Operating Systems</h3>
                            <div className="subheading mb-3">Operating Systems I've been using</div>
                            <p>I've been using Linux since 2015 and my favorite Distro is Arch Linux but I'm also using Ubuntu and Windows 10 pro for Software Development.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">CONFIGURATION SETTINGS</a></span>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Command Line Environment</h3>
                            <div className="subheading mb-3">Conmmand Line Environment I've been using</div>
                            <p>I am a big fan of Z-Shell especially with Oh-My-Zsh and I am also familiar with Bash Shell and Windows Command Prompt. </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">SHELL CONFIGURATION</a></span>
                        </div>
                    </div>


                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Version Control Systems</h3>
                            <div className="subheading mb-3">VCS I've been using </div>
                            <p> I've been using Github as my main VCS most of the time and sometimes i use Gitlab for my side projects. </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">VIEW DESIGN LIBRARIES PROJECTS</a></span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Databases</h3>
                            <div className="subheading mb-3">SQL and NoSQL I've been using </div>
                            <p> My database of choice is MongoDB but I'm also familiar Redis, MySQL and Firebase. </p>
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