import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { PageView } from '../../../Elements'
import { Text } from '../../../LangProvider'
import { spantextColor, titletextColor } from '../../../theme'
import './sectionEducation.css'

const Head = styled.div`
    h2, h3{
        color: ${titletextColor} !important;
    }
`
const Spanhead = styled.span`
    color: ${spantextColor} !important;
`

const Education = () => {
    ReactGA.initialize('UA-165287353-1')
    PageView()
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <Head className="w-100">
                <h2 className="mb-5"><Text tid="ideducation" /></h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0"><Text tid="ideducationheader1" /></h3>
                        <div className="subheading mb-3"><Text tid="ideducationheader1content1" /></div>
                        <div><Text tid="ideducationheader1content2" /></div>
                        {
                            /**
                             * <p>GPA: 3.23</p>
                             */
                        }
                    </div>
                    <div className="resume-date text-md-right">
                        <Spanhead className="text-primary"><Text tid="ideducationheader1time" /></Spanhead>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0"><Text tid="ideducationheader2" /></h3>
                        <div className="subheading mb-3"><Text tid="ideducationheader2content1" /></div>
                    </div>
                    <div className="resume-date text-md-right">
                        <Spanhead className="text-primary"><Text tid="ideducationheader2time" /></Spanhead>
                    </div>
                </div>
            </Head>
        </section>
    );

}


export default Education