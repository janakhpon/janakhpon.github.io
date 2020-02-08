import React from 'react'
import About from './About/sectionAbout'
import Experience from './Experience/sectionExperience'
import Education from './Education/sectionEducation'
import Skills from './Skills/sectionSkills'
import Interests from './Interests/sectionInterests'
import Awards from './Awards/sectionAwards'
import Works from './Works'
import Environment from './Environment'
import styled from 'styled-components';
import { containerbackgroundColor, containertextColor } from '../../theme';

const ContainerWrapper = styled.div`
    color: ${containertextColor} !important;
    background: ${containerbackgroundColor} !important;
`

const Container = (props) => {
    return (
        <ContainerWrapper className="container-fluid p-0">
            <About />
            <hr className="m-0" />

            <Experience />
            <hr className="m-0" />

            <Education />
            <hr className="m-0" />

            <Skills />
            <hr className="m-0" />

            <Works />
            <hr className="m-0" />

            <Environment />
            <hr className="m-0" />

            <Interests />
            <hr className="m-0" />

            <Awards />


        </ContainerWrapper>
    )
}

export default Container