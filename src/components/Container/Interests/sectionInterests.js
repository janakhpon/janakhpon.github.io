import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { PageView } from '../../../Elements'
import { Text } from '../../../LangProvider'
import { titletextColor } from '../../../theme'
import './sectionInterests.css'

const Head = styled.div`
    h2, h3{
        color: ${titletextColor} !important;
    }
`

const Interests = () => {
    ReactGA.initialize('UA-165287353-1')
    PageView()
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <Head className="w-100">
                    <h2 className="mb-5"><Text tid="idinterests" /></h2>
                    <p><Text tid="idinterestscontent" /></p>
                    <p className="mb-0"><Text tid="idinterestscontent1" /></p>
                    <p className="mb-0"><Text tid="idinterestscontent2" /></p>
                </Head>
            </section>
        );
}

export default Interests