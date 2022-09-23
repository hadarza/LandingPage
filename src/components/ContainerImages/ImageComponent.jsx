import React from 'react'
const ImageComponent = ({titleCard,image}) => {
  return (
    <div className='w-h-card'>
      <div className='container_card'>
        <div className='container_img'>
            <img src={image}/>
        </div>
        <h5>{titleCard}</h5>
      </div>
    </div>

  )
}

export default ImageComponent