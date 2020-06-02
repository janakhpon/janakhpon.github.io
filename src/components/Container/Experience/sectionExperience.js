import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { PageView } from '../../../Elements'
import { Text } from '../../../LangProvider'
import { titletextColor, spantextColor } from '../../../theme'
import './sectionExperience.css'

const Head = styled.div`
    h2, h3{
        color: ${titletextColor} !important;
    }
`
const Spanhead = styled.span`
    color: ${spantextColor} !important;
`
const Experience = () => {
    ReactGA.initialize('UA-165287353-1')
    PageView()

    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <Head className="w-100">
                <h2 className="mb-5"><Text tid="idexperience" /></h2>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0"><Text tid="idexperienceheader1" /></h3>
                        <div className="subheading mb-3"><Text tid="idexperienceheader1content1" /></div>
                        <p><Text tid="idexperienceheader1content2" /></p>
                    </div>
                    <div className="resume-date text-md-right">
                        <Spanhead className="text-primary"><Text tid="idexperienceheader1time" /></Spanhead>
                    </div>
                </div>
                {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">Web Design Collaboration</h3>
                        <div className="subheading mb-3">Recruting and Collaboration</div>
                        <p>Collaboratively participation in University Web Development Bootcamp for Basic Web Design and group based Knowledge sharing. </p>
                    </div>
                    <div className="resume-date text-md-right">
                        <Spanhead className="text-primary">September 2015 - December 2015</Spanhead>
                    </div>
                </div> */}
            </Head>
        </section>
    )
}

export default Experience