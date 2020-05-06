import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { PageView } from '../../../Elements'
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
                    <h2 className="mb-5">Interests</h2>
                    <p>Apart from being a developer, I enjoy most of my time being outdoors. In the cool season (late October to mid-February in Myanmar), I enjoy sightseeing in the forest/mountains with a camera as i love shooting awesome photos for my photography album (Check my facebook albumn ).</p>
                    <p className="mb-0">When forced indoors, I love reading novels and tech news, writing poems (check my facebook timeline to read mine ) next to backyard's window and watching animes (One Piece, Naruto, Ranma 1/2 and more ..).</p>
                    <p className="mb-0">I also have a habbit of continuous learning of modern technology which could mesmerize me (currently learning Rust and AI) . </p>
                </Head>
            </section>
        );
}

export default Interests