import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="bond"
          className={`${this.props.article === 'bond' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Bond</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I am the Alpha and the Omega, the Beginning and the End.
          </p>
          <p>
            To the thirsty I will give water without cost from the spring of the water of life.
          </p>
          {close}
        </article>

        <article
          id="borrow"
          className={`${this.props.article === 'borrow' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Borrow</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I will give so that you may support your family.
          </p>
          <p>
            Whoever believes in nomDAO shall never thirst and his family forever live in peace.
          </p>
          {close}
        </article>

        <article
          id="redeem"
          className={`${this.props.article === 'redeem' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Redeem</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
           Don’t keep on wanting money, people have loads and they’re never happy.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
           <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
             Now I am become nom, the connector of souls. The soul of souls.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
