import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/styles.css";
import datoCiudad from "../styles/datos"

// import required modules
import { Autoplay, Pagination, Navigation  } from "swiper";

export default function CarrouselApp() {
  return (
    <>
      <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={30}
    
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}  
        pagination={{
          clickable: true,         
                   
        }}
        navigation={true}
        
       
      
       
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
            row:2
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
            row: 2
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
            row:2
          },
        }}
    
       
         
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
     >
        {datoCiudad.map(ciudad =>
        <SwiperSlide key={ciudad.id}>
          <img src={ciudad.imagen} alt="ciudad"/>
          <h3 className="nombreCiudad">{ciudad.nombre}</h3>
        </SwiperSlide>
        
          )}
          </Swiper>
      
    </>
        
  )} 
     
    
  


