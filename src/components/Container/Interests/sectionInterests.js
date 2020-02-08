import React, { Component } from 'react'
import styled from 'styled-components'
import { titletextColor } from '../../../theme'
import './sectionInterests.css'

const Head = styled.div`
    h2, h3{
        color: ${titletextColor} !important;
    }
`

export default class Interests extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <Head className="w-100">
                    <h2 className="mb-5">Interests</h2>
                    <p>Apart from being a lead developer, I enjoy most of my time being outdoors. In the winter, I enjoy sightseeing in the forest with a camera as i love shooting awesome photo for my photography album.</p>
                    <p className="mb-0">When forced indoors, I love reading, writing poems next to backyard's window and watching anime.</p>
                </Head>
            </section>
        );
    }
}