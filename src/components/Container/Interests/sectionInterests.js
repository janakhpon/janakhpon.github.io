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
                    <p>Apart from being a lead developer, I enjoy most of my time being outdoors. In the cool season (late October to mid-February in Myanmar), I enjoy sightseeing in the forest/mountains with a camera as i love shooting awesome photos for my photography album (Check my facebook albumn ).</p>
                    <p className="mb-0">When forced indoors, I love reading novels and tech news, writing poems (check my facebook timeline to read mine ) next to backyard's window and watching animes (One Piece, Naruto).</p>
                    <p className="mb-0">I also have a habbit of continuous learning of modern technology which could mesmerize me (Currently learning Golang, Rustlang and AI) . </p>
                </Head>
            </section>
        );
    }
}