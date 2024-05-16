import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle';


export default function Category() {
    return (
        <div className='max-w-4xl mx-auto'>
            <SectionTitle
                heading={"Order Online"}
                description={'From 11:00am to 10:00pm'}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h1 className='text-4xl text-center -mt-24'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h1 className='text-4xl text-center -mt-24'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h1 className='text-4xl text-center -mt-24'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h1 className='text-4xl text-center -mt-24'>Desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h1 className='text-4xl text-center -mt-20'>Salads</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
