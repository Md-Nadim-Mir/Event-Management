import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation, Pagination,  A11y,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';






const Banner = () => {

    return (

        <Swiper

            modules={[Navigation, Pagination, Autoplay, A11y]}

            centeredSlides={true}

            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}

            spaceBetween={10}
            slidesPerView={1}
            navigation
            
            pagination={{ clickable: true }}
            
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
           
           {/* exibition */}

           <SwiperSlide>
                <img className='w-full h-[70vh]' src="/public/exibition/e2.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full h-[70vh]' src="/public/exibition/e1.jpg" alt="" />
            </SwiperSlide>

          

            <SwiperSlide>
                <img className='w-full h-[70vh]' src="/public/Conference/c1.jpg" alt="" />
            </SwiperSlide>

          



            <SwiperSlide>
                <img className='w-full h-[70vh]' src="/public/Conference/c4.jpg" alt="" />
            </SwiperSlide>


            <SwiperSlide>
                <img className='w-full h-[70vh]' src="/public/meetings/m6.jpg" alt="" />
            </SwiperSlide>


            <SwiperSlide>
                <img className='w-full h-[70vh]' src="/public/exibition/e3.jpg" alt="" />
            </SwiperSlide>


            <SwiperSlide>
                <img className='w-full h-[70vh]' src="/public/exibition/e4.jpg" alt="" />
            </SwiperSlide>


            <SwiperSlide>
                <img className='w-full h-[70vh]' src="/public/exibition/e5.jpg" alt="" />
            </SwiperSlide>





            

           

           
        </Swiper>
    );
};

export default Banner;