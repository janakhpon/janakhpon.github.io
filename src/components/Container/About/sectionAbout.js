import React, {useContext} from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { PageView } from '../../../Elements'
import { aofsubheadingdiv, spantextColor, subheadtextColor } from '../../../theme'
import { Text, LanguageContext } from '../../../LangProvider';
import './sectionAbout.css'

const Subdiv = styled.div`
    a{
        color: ${aofsubheadingdiv};
        font-size: 0.85em;
    }
`
const Subhead = styled.h1`
    color: ${subheadtextColor} !important;
`
const Spanhead = styled.span`
    color: ${spantextColor} !important;
`

const About = () => {
    ReactGA.initialize('UA-165287353-1')
    PageView()
    const languageContext = useContext(LanguageContext)

    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <Subhead className="mb-0">Ja Nakh
                        <Spanhead className="text-primary">Pon</Spanhead>
                </Subhead>
                <>

                {languageContext.language.id === 'en' ? (<>
                    <Subdiv className="subheading mb-5"><Text tid="idaddress" /><a href="tel:+9509792359726"><Text tid="idphonenumber" /></a> ·
                    <a href="mailto:minchanhtutoo@gmail.com">&nbsp;minchanhtutoo@gmail.com</a>
                </Subdiv>
                                    </>) : (<>
                <Subdiv className="subheading mb-5 reduceFontSize"><Text tid="idaddress" /><a href="tel:+9509792359726"><Text tid="idphonenumber" /></a> • 
                    <a href="mailto:minchanhtutoo@gmail.com">&nbsp;minchanhtutoo@gmail.com</a>
                </Subdiv>
                </>)}

                </>
                
                <p className="lead mb-5"> <Text tid="mydescription" /></p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/zinmin-htutoo-385651136" className="one">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/janakhpon" className="two">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com/ja_nakh" className="three">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/chan.htut.5" className="four">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About