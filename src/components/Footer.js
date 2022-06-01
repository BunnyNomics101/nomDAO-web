import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; nomDAO. <a href="https://twitter.com/TheNomDAO">Twitter</a> | <a href="discord.gg/uWCfmp6daq">Discord</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
