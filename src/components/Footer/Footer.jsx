import React from 'react'
import {FooterJSON} from './FooterJSON'
const Footer = () => {
  return (
    <div className='Footer'>
        <h2>קרדיטים</h2>
        <div>
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
  )
}

export default Footer