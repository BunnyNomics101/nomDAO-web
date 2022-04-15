import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>nomDAO</h1>
        <p>
          The Iron Bank of Wonderland
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('bond')
            }}
          >
            Bond
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('borrow')
            }}
          >
            Borrow
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('redeem')
            }}
          >
            Redeem
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
