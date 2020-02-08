import React from 'react'
import styled from 'styled-components'
import { titletextColor } from '../../../theme'

const Head = styled.div`
    h2, h3{
        color: ${titletextColor} !important;
    }
`

const CV = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="CV">
            <Head className="w-100">
                <h2 className="mb-5">Resume</h2>
                <p>Check my Resume down below.</p>
                <a className="btn btn-success" as="a" href="./cv/Resume.pdf" target="_blank" rel="noopener noreferrer" >HIREME</a>
            </Head>
        </section>
    )
}

export default CV