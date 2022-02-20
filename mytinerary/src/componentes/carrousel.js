import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import datoCiudad from "../styles/datos"

// import required modules
import { Autoplay, Pagination, Navigation  } from "swiper";

export default function CarrouselApp() {
  return (
    <>
      <Swiper
      slidesPerView={4}
      slidesPerGroup={4}
      spaceBetween={30}
    
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}  
        pagination={{
          clickable: true,         
                   
        }}
        navigation={true}
        
       
      
       
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
    
       
         
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
     >
        {datoCiudad.map(ciudad =>
        <SwiperSlide>
          <img src={ciudad.imagen}/>
          <h3 className="nombreCiudad">{ciudad.nombre}</h3>
        </SwiperSlide>
        
          )}
          </Swiper>
      
    </>
        
  )}
     
    
  


