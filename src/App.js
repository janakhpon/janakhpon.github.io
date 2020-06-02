import React from 'react';
import ReactGA from 'react-ga'
import Menu from './components/Nav/navContainer'
import Container from './components/Container/displayContainer'
import { LanguageProvider } from './LangProvider'
import history from './History'
import './styles/main.scss'

const App = () => {
  ReactGA.initialize('UA-165287353-1')
  ReactGA.pageview(window.location.pathname + window.location.search)

  history.listen((location) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
  })

  return (
    <div>
      <LanguageProvider>
        <Menu />
        <Container />
      </LanguageProvider>
    </div>
  )

}

export default App;
