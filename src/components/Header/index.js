import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-bg-contaienr">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
          className="nxt-slide-logo"
          alt="nxt slides logo"
        />
        <h1>Nxt Slides</h1>
      </div>
    )
  }
}

export default Header
