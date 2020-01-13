import React, { Component } from 'react'
import './sectionAbout.css'


export default class About extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">Ja Nakh
<span className="text-primary"> Pon</span>
                    </h1>
                    <div className="subheading mb-5">No.82 Khayay Street · Mawlamyine(moulmein), Ngantae Ward · (+95) 09 7923 59726 ·
<a href="mailto:minchanhtutoo@gmail.com">minchanhtutoo@gmail.com</a>
                    </div>
                    <p className="lead mb-5"> Detailed-oriented and self-motivated fullstack engineer with both advanced education and solid experienced in technoloy. </p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/zinmin-htutoo-385651136">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/janakhpon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/ja_nakh">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/minchanhtutoo.5">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}