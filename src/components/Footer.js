import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>@ {new Date().getFullYear()} Airbnb clone! No rights reserved - this is a demo! by Abrar Shahriar</p>
            <p>Privacy - Terms - Sitemap - Company Details</p>
        </div>
    )
}

export default Footer
