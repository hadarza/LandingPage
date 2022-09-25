import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React,{ useState,useEffect } from 'react';
let slidesToShow = 2.5;

const carouselProperties = {
  // prevArrow: <PreviousBtn />,
  // nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: false,
  arrows:false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1.5,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2.5,
        centerMode: false,
      },
    },
  ],
};

const Carosual = ({title,obj}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 1.5;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 1.5;
  } else {
    slidesToShow = 2.5;
  }

  return (
    <div className='carousel'>
        <h4>{title}</h4>
      <Slider {...carouselProperties}>
            {obj.map((object,index)=>(
                <ImageComponent key={index} titleCard={object.name} image={object.img} href={object.href}/>
            ))}
      </Slider>
    </div>
  );
};

const ImageComponent = ({titleCard,image,href}) => {
    return (
       <div className='flex-col'>
        {console.log(titleCard)}
            <a alt="href" href={href} download>
                <img  style={{
                height:'20rem',
                objectFit: 'contain',
                marginBottom: '10px',
                borderRadius: '20px'
                }} src={image}/>
            </a>
             
          <h5>{titleCard}</h5>
      </div>
    )
};

export default Carosual;
