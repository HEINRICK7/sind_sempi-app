import React from 'react'

import './styles.css'

import Img from '../../assets/notFound.svg'

const NotFound = () => {
    return (
        <div className="container_notfound">
            <img src={Img} style={{width: '50%'}} alt="notfound"/>
        </div>
    )
}

export default NotFound
