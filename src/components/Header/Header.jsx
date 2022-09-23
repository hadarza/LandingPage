import React from 'react'
import {images} from '../../constants/index'
const Header = ({title,subtitle,Classification}) => {
  return (
    <div className='header_landingPage'>
        <div className='bg_pattern'>
            <img className='bg_pattern_img' src={images.bg_pattern}/>
        </div>
        <div className='flex-info'>
            <div>
                <h3>-{Classification}-</h3>
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <h2>{subtitle}</h2>
            </div>
        </div>
        <div className='logo-machzar'>
            <img src={images.logomachzar}/>
            <h5>מקחצ"ר</h5>
        </div>


    </div>
  )
}

export default Header