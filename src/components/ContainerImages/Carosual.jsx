import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React,{ useState,useEffect } from 'react';
let slidesToShow = 3;

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
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 1,
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
    slidesToShow = 1;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 2;
  } else {
    slidesToShow = 3;
  }

  return (
    <div className='carousel'>
        <h4>{title}</h4>
      <Slider {...carouselProperties}>
            {obj.map((object,index)=>(
                <ImageComponent key={index} titleCard={object.name} image={object.img}/>
            ))}
      </Slider>
    </div>
  );
};

const ImageComponent = ({titleCard,image}) => {
    return (
      <div className='container_card'>
              <img  style={{
                width: '100%',
                height:'20rem',
                objectFit: 'contain',
                marginBottom: '10px',
                }} src={image}/>
          <h5>{titleCard}</h5>
      </div>
    )
};

export default Carosual;
