'use client';
import SectionTitle from '@/components/common/SectionTitle'
import { posts } from '@/components/constans/data'
import PostCard from '@/components/posts/PostCard'
import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const FeaturesSection: React.FC = () => {
  return (
    <section className='py-10 home_category_section'>
      <div className="container ">

        <SectionTitle title='Features' subTitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, labore!' />

        <div className='   mt-10'>
          {/* {
            posts?.map((post, index) => <PostCard post={post} />)
          } */}


          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              580: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {
              posts?.map((post, index) => <SwiperSlide key={index}><PostCard post={post} /></SwiperSlide>)
            }

          </Swiper>

        </div>
      </div>
    </section>
  )
}

export default FeaturesSection