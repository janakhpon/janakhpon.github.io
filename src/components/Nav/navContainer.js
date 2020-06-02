import React, { useContext } from 'react'
import { useTheme } from '../../ThemeContext';
import styled from 'styled-components';
import { navbackgroundColor, navtextColor } from '../../theme';
import { Event } from '../../Elements'
import { languageOptions } from '../../Languages'
import { LanguageContext, Text } from '../../LangProvider'

import './navContainer.css'

const NavWrapper = styled.nav`
    color: ${navtextColor} !important;
    background: ${navbackgroundColor} !important;
`

const SelectWrapper = styled.select`
    background: ${navbackgroundColor} !important;
`

const Menu = () => {
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
        Event("Dark&Light Button", `toggle between Dark mode and Light mode`, "Navbar Component")
    }

    const languageContext = useContext(LanguageContext)
    const handleLanguageChange = (event) => {
        Event("Language Switch", `selected ${event.target.value}`, "Navbar")
        const selectedLanguage = languageOptions.find(item => item.id === event.target.value)
        languageContext.setLanguage(selectedLanguage)
        
    };


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
                        <SelectWrapper
                            onChange={handleLanguageChange}
                            value={languageContext.language.id}
                            className="selectWrapper"
                        >
                            {languageOptions.map(item => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.text}
                                </option>
                            ))}
                        </SelectWrapper>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about"><Text tid="idabout" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#experience"><Text tid="idexperience" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#education"><Text tid="ideducation" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#skills"><Text tid="idskills" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#works"><Text tid="idworks" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#environment"><Text tid="idenvironment" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#interests"><Text tid="idinterests" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#CV"><Text tid="idresume" /></a>
                    </li>
                </ul>
            </div>
        </NavWrapper>
    )
}
export default Menu