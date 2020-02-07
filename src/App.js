import React, {Component} from 'react';
import Menu from './components/Nav/navContainer'
import Container from './components/Container/displayContainer'
import './styles/main.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Container/>
      </div>
    )
  }
}

export default App;
