import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Typography } from '@mui/material';


export default  function ImageSlider(props) {
    
    let { slides , slidesPerView } = props;
    console.log("slides",slides)
  return (
 
      <Swiper
      modules={[Pagination,  A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} >
          <img src={slide.image} />
          <Typography> {slide.desc?slide.desc:""} </Typography>
        </SwiperSlide>
      ))}
  
    </Swiper>
       
        

  );
}
