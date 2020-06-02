import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { PageView } from '../../../Elements'
import { Text } from '../../../LangProvider'
import { titletextColor } from '../../../theme'
import './sectionSkills.css'

const Head = styled.div`
    h2, h3{
        color: ${titletextColor} !important;
    }
`

const Skills = () => {
    ReactGA.initialize('UA-165287353-1')
    PageView()

    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <Head className="w-100">
                <h2 className="mb-5"><Text tid="idskills" /></h2>

                <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <i className="fab fa-html5"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="list-inline-item">
                        <i class="fab fa-bootstrap"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-js-square"></i>
                    </li>
                    {/* <li className="list-inline-item">
                            <i className="fab fa-angular"></i>
                        </li> */}
                    <li className="list-inline-item">
                        <i className="fab fa-react"></i>
                    </li>
                    <li className="list-inline-item">
                        <i class="fab fa-vuejs"></i>
                    </li>
                    <li className="list-inline-item">
                        <i class="fab fa-angular"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-sass"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-gulp"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-grunt"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-npm"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-yarn"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-python"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fas fa-terminal"></i>
                    </li>

                </ul>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <i className="fa-li fa fa-check"></i>
                            Mobile-First, Responsive Design</li>

                    <li>
                        <i className="fa-li fa fa-check"></i>
                            Fullstack web app Development </li>
                    <li>
                        <i className="fa-li fa fa-check"></i>
                            crossed platform os app Development </li>
                    <li>
                        <i className="fa-li fa fa-check"></i>
                            Mobile app Development</li>
                </ul>
            </Head>
        </section>
    );
}


export default Skills