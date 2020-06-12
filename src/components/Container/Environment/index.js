import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { PageView } from '../../../Elements'
import { Text } from '../../../LangProvider'
import { titletextColor } from '../../../theme'
import './index.css'

const Head = styled.div`
    h2, h3{
        color: ${titletextColor} !important;
    }
`


const Environment = () => {
    ReactGA.initialize('UA-165287353-1')
    PageView()
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="environment">
            <Head className="w-100">
                <h2 className="mb-5"><Text tid="idenvironment" /></h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Operating Systems</h3>
                        <div className="subheading mb-3">Operating Systems I've been using</div>
                        <p>I've been using Linux since 2015 and my favorite Distro is Arch Linux but I also work with Ubuntu and Windows 10 pro for Software Development.</p>
                    </div>
                    {/* <div className="resume-date text-md-right">
                            <span className="text-primary"><a href="/">CONFIGURATION SETTINGS</a></span>
                        </div> */}
                </div>


                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Command Line Environment</h3>
                        <div className="subheading mb-3">Conmmand Line Environment I've been using</div>
                        <p>I am a big fan of Z-Shell especially with <code>Oh-My-Zsh</code> and I am also familiar with Bash Shell and Windows Command Prompt. </p>
                    </div>
                </div>


                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Version Control Systems</h3>
                        <div className="subheading mb-3">VCS I've been using </div>
                        <p> I've been using Github since 2018 as my main VCS most of the time and sometimes i use Gitlab for my side projects. </p>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Databases</h3>
                        <div className="subheading mb-3">SQL and NoSQL Databases I've been using </div>
                        <p> My database of choice is MongoDB and PostgreSql but I'm also familiar with Elasticsearch, Sqlite, MySQL, Firebase and for caching I use Redis, Memcached, Ristretto and Gocache. </p>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Container</h3>
                        <div className="subheading mb-3"> I've been using Docker for development and deployment with Container. </div>
                    </div>
                </div>


                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Cloud Platforms</h3>
                        <div className="subheading mb-3">Development and Deployment Platforms</div>
                        <p> I always use Heroku for the purpose of development and testing but sometimes I also use Google Cloud Environment, Firebase, AWS, Netlify, Zeit, Awardspace and 000Webhost. </p>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Programming Languages</h3>
                        <p> JavaScript, Typescript, <code> <b> Golang  </b> </code>, Rustlang and Python are the Languages I am using for development at the moment but i also used to code with JavaSE/EE and PHP. </p>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Frameworks</h3>
                        <div className="subheading mb-3"> FRAMEWORKS & LIBRARIES </div>
                        <p> I use <code> React with Material-ui </code> for frontend development most of the time and sometimes with Vue as well as Bootstrap, semantic-ui for UI and
                         SCSS/CSS3 for styling and  ExpressJS, <code>Gin, Fiber, </code> Mux, Django, Flask, NextJs, NestJS, Rocket for the Backend Development. For Cross platform development I use Electron.js, for mobile development React Native is my choice and for Machine Learning i use Jupyter Notebook with Tensorflow, Keras and other popular libraries.  </p>
                    </div>
                </div>
            </Head>
        </section>
    );
}

export default Environment