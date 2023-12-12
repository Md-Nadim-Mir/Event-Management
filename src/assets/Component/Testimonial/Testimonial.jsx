import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import a1 from '../../../../public/a1.jpeg'
import a2 from '../../../../public/a2.jpeg'
import a3 from '../../../../public/a3.jpeg'
import a4 from '../../../../public/a4.jpeg'
import a5 from '../../../../public/a5.jpeg'
import a6 from '../../../../public/a6.jpeg'
import a7 from '../../../../public/a7.jpeg'
import a8 from '../../../../public/a8.jpeg'
import a9 from '../../../../public/a9.jpg'



import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';


const Testimonial = () => {

    useEffect(() => {

        AOS.init({ duration: 2500 });

    }, [])


    return (

        <div className='my-20'>

            <h1 data-aos="zoom-in" className='text-center text-xl md:text-5xl font-extrabold py-14 lg:pl-20 text-[#36e8f8]'>Happy Clients <span className='text-black'>Review</span></h1>

            <Swiper

                modules={[Navigation, Pagination, Autoplay, A11y]}

                centeredSlides={true}

                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}

                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}

            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >

                {/* exibition */}

                <SwiperSlide className='pb-12'>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a1} alt="" />

                        </div>



                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>I have been working with XYZ Corporation for over two years now, and their level of service has been exceptional. The team is responsive, proactive, and always goes above and beyond to meet our needs. The quality of their products is top-notch, and they have consistently exceeded our expectations. Their dedication to client satisfaction is truly commendable.</h1>

                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className='text-xl font-extrabold'>Alen Doland</p>
                            <p className='font-bold'>Sr. Software Engineer</p>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a2} alt="" />

                        </div>

                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>ABC Consulting has been a reliable partner in our business endeavors. Their consultants have a deep understanding of our industry and provide valuable insights and solutions. Their project management is efficient, and deadlines are consistently met. Theres room for improvement in communication and occasional responsiveness, but overall, we are pleased with their services.</h1>

                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className='text-xl font-extrabold'>Nick Potahs</p>
                            <p className='font-bold'>Sr. Designer</p>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a3} alt="" />

                        </div>

                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>ABC Consulting has been a reliable partner in our business endeavors. Their consultants have a deep understanding of our industry and provide valuable insights and solutions. Their project management is efficient, and deadlines are consistently met. Theres room for improvement in communication and occasional responsiveness, but overall, we are pleased with their services.</h1>

                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className='text-xl font-extrabold'>Hatru Sign</p>
                            <p className='font-bold'>Sr. Analyst</p>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a4} alt="" />

                        </div>

                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>I have been working with XYZ Corporation for over two years now, and their level of service has been exceptional. The team is responsive, proactive, and always goes above and beyond to meet our needs. The quality of their products is top-notch, and they have consistently exceeded our expectations. Their dedication to client satisfaction is truly commendable.</h1>


                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className='text-xl font-extrabold'>Rasel Domingo</p>
                            <p className='font-bold'>Digital Marketer</p>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a5} alt="" />

                        </div>

                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>ABC Consulting has been a reliable partner in our business endeavors. Their consultants have a deep understanding of our industry and provide valuable insights and solutions. Their project management is efficient, and deadlines are consistently met. Theres room for improvement in communication and occasional responsiveness, but overall, we are pleased with their services.</h1>


                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className='text-xl font-extrabold'>Rahul Singha</p>
                            <p className='font-bold'>Web Expert</p>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a6} alt="" />

                        </div>

                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>I have been working with XYZ Corporation for over two years now, and their level of service has been exceptional. The team is responsive, proactive, and always goes above and beyond to meet our needs. The quality of their products is top-notch, and they have consistently exceeded our expectations. Their dedication to client satisfaction is truly commendable.</h1>


                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className='text-xl font-extrabold'>Mitchel Stack</p>
                            <p className='font-bold'>CEO & Founder</p>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a7} alt="" />

                        </div>

                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>ABC Consulting has been a reliable partner in our business endeavors. Their consultants have a deep understanding of our industry and provide valuable insights and solutions. Their project management is efficient, and deadlines are consistently met. Theres room for improvement in communication and occasional responsiveness, but overall, we are pleased with their services.</h1>


                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className='text-xl font-extrabold'>David Miller</p>
                            <p className='font-bold'>Technical Analyst</p>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a8} alt="" />

                        </div>

                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>I have been working with XYZ Corporation for over two years now, and their level of service has been exceptional. The team is responsive, proactive, and always goes above and beyond to meet our needs. The quality of their products is top-notch, and they have consistently exceeded our expectations. Their dedication to client satisfaction is truly commendable.</h1>

                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className=' text-xl font-extrabold'>Trent Pitter</p>
                            <p className='font-bold'>Founder & Director</p>
                        </div>

                    </div>

                </SwiperSlide>



                <SwiperSlide>

                    <div>
                        <div className='flex justify-center'>

                            <img className='w-[100px] h-[100px] rounded-full' src={a9} alt="" />

                        </div>

                        <h1 className='xl:px-72 lg:px-60 md:px-20 px-5 py-5 font-bold'>ABC Consulting has been a reliable partner in our business endeavors. Their consultants have a deep understanding of our industry and provide valuable insights and solutions. Their project management is efficient, and deadlines are consistently met. Theres room for improvement in communication and occasional responsiveness, but overall, we are pleased with their services.</h1>

                        <div className='flex justify-center py-3'>

                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                        <div className='text-center '>
                            <p className='text-xl font-extrabold'>Jos Buttler</p>
                            <p className='font-bold'>Blogger & Analyst</p>
                        </div>

                    </div>

                </SwiperSlide>







            </Swiper>
        </div>
    );
};

export default Testimonial;