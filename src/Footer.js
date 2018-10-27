import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'


const Footer = ({title, subtitle, onShowAgenda, onHideAgenda, news, onNextNews}) => {
    return (
            <div className="footer">
                <div className="logo" >
                    <img alt="" src="social-logo.png" onClick={onShowAgenda}/>
                </div>
                <div className="info">
                    <div className="title-subtitle">
                        <div className="title">{title}</div>
                        <div className="subtitle" onClick={onHideAgenda}>{subtitle}</div>
                    </div>
                    <div className="quick-news" key={news} onClick={onNextNews}>
                     {news}   
                    </div>
                </div>
            </div>
    )
}

Footer.propTypes = {
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    onShowAgenda:PropTypes.func,
}

export default Footer