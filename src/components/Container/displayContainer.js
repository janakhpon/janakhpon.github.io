import React, { Component } from 'react'
import About from './About/sectionAbout'
import Experience from './Experience/sectionExperience'
import Education from './Education/sectionEducation'
import Skills from './Skills/sectionSkills'
import Interests from './Interests/sectionInterests'
import Awards from './Awards/sectionAwards'
import Works from './Works'
import './displayContainer.css'

export default class Container extends Component {
    render() {
        return (
            <div className="container-fluid p-0">

                <About/>
                <hr className="m-0" />

                <Experience/>
                <hr className="m-0" />
 
                <Education/>
                <hr className="m-0" />

                <Skills/>
                <hr className="m-0" />

                <Works/>
                <hr className="m-0" />

                <Interests/>
                <hr className="m-0" />

                <Awards/>
                
                
            </div>
        );
    }
}
