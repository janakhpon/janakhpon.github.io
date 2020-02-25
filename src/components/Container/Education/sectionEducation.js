import React, { Component } from 'react'
import styled from 'styled-components'
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

export default class Education extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <Head className="w-100">
                    <h2 className="mb-5">Education</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Technological University of Mawlamyine</h3>
                            <div className="subheading mb-3">Bachelor of Engineering </div>
                            <div>Specialized at Information Technology</div>
                            {
                                /**
                                 * <p>GPA: 3.23</p>
                                 */
                            }
                        </div>
                        <div className="resume-date text-md-right">
                            <Spanhead className="text-primary">Jan 2014 - Feb 2020</Spanhead>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div className="resume-content">
                            <h3 className="mb-0">NO(9) B.E.H.S , Basic Education High School</h3>
                            <div className="subheading mb-3">General Education Program</div>
                            {
                                /**
                                 * <p>GPA: 3.23</p>
                                 */
                            }
                        </div>
                        <div className="resume-date text-md-right">
                            <Spanhead className="text-primary">Jan 2002 - Jan 2013</Spanhead>
                        </div>
                    </div>

                    {
                        /**
                         * <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">ANNUAL IELTS EXAMINATION TEST</h3>
                            <div className="subheading mb-3">Band 7 </div>
                            <div>Specialized at Engineering</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Sep - 2018</span>
                            </div>
                        </div>
                         */
                    }


                </Head>
            </section>
        );
    }
}