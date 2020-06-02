import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { PageView, Event } from '../../../Elements'
import { Text } from '../../../LangProvider'
import { titletextColor } from '../../../theme'

const Head = styled.div`
    h2, h3{
        color: ${titletextColor} !important;
    }
`

const CV = () => {
    ReactGA.initialize('UA-165287353-1')
    PageView()

    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="CV">
            <Head className="w-100">
                <h2 className="mb-5"><Text tid="idresume" /></h2>
                <p>Check my Resume down below.</p>
                <a className="btn btn-success" as="a" href="./cv/Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={()=> Event("HIREME Button", `clicked to view Resume`, "CV Component")}>HIREME</a>
            </Head>
        </section>
    )
}

export default CV