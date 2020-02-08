import React from 'react'
import { useTheme } from '../../ThemeContext';
import styled from 'styled-components';
import { navbackgroundColor, navtextColor } from '../../theme';

const NavWrapper = styled.nav`
    color: ${navtextColor} !important;
    background: ${navbackgroundColor} !important;
`
const Menu = (props) => {
    const [check, setCheck] = React.useState(false)
    const themeToggle = useTheme();

    const handleOnChange = async (e) => {
        if (check === true) {
            setCheck(false)
            try {
                themeToggle.toggle()
            } catch (err) {
            }
        } else {
            setCheck(true)
            try {
                themeToggle.toggle()
            } catch (err) {
            }
        }
    }

    return (
        <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Ja Nakh Pon</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="Ja Nakh Pon" />
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <label className="switch-wrap">
                            <input className="form-check-input" type="checkbox" checked={check}
                                onChange={handleOnChange} />
                            <div className="switch"></div>
                        </label>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#works">Works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#environment">Environment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#cv">CV/Resume</a>
                    </li>
                    {
                        /**
                         * 
                         *  <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
                            </li>
                         * 
                         */
                    }
                </ul>
            </div>
        </NavWrapper>
    )
}
export default Menu