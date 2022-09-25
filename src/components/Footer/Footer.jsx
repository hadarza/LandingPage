import React from 'react'
import {FooterJSON} from './FooterJSON'
import {images} from '../../constants/index'
const Footer = () => {
  return (
    <div className='Footer'>
        <h2>קרדיטים</h2>
        <div className='flex-col'>
          
          <div className="credits">
            {FooterJSON.map((role,index)=>(
                <div key={index}>
                  <h5>{role.title}</h5>
                  {role.roles.map((obj,index)=>(
                    <h6 key={index}>{obj.title}: {obj.person}</h6>
                  ))} 
                </div>
              
            ))}
          </div>
        </div>
        <div className='logo'>
          <img src={images.logoHebet}/>
        </div>
    </div>
  )
}

export default Footer