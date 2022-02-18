import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function CarrouselApp() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/Embalse-Potrerillos.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/cerro de la gloria.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/Embalse-Potrerillos.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/Hotel-y-Reserva-Villavicencio.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/Embalse-Potrerillos.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/manzano-historico.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/mendoza-capitaljpg.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/Mendozadenoche.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/Parque-Gnral-San-Martin-Mendoza.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/parque-nacional-cerro-aconcagua-mendoza.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/San Rafael.jpg')} /></SwiperSlide>
        <SwiperSlide><img  className='imagen1'src={require('../ciudad de Mendoza/puente-inca-2.jpg')} /></SwiperSlide>
      </Swiper>
    </>
  );
}

