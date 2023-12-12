
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import award from '../../../../public/award.jpg'
import conference from '../../../../public/conference.jpg'
import expo from '../../../../public/expo.jpg'
import meeting from '../../../../public/meeting.jpg'
import product from '../../../../public/product.png'
import team from '../../../../public/team.jpg'


const Choose = () => {

   useEffect(()=>{

    AOS.init({duration:1000});

   },[])

    return (

        <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center py-5 text-[#36e8f8]" data-aos="fade-up ">Why Choose <span className='text-black'>Us ?</span></h1>

            <p data-aos="zoom-in" className="text-base font-bold text-center  px-4 xl:px-48 lg:px-36 md:px-20 pt-8 pb-14">We have successfully completed 200+ projects . This project include corrporate meeting , expo , seminars , team building , product launches and award ceremony related. We will also should be provide 100% authentic service for improve your project success. </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10  lg:px-48 xl:px-60">

                <div data-aos="fade-up" className="flex flex-col items-center justify-center text-base font-bold p-1 border-2 shadow-xl  py-2 rounded-2xl ">

                    <img className="w-[100px] h-[50px] rounded-lg" src={award} alt="" />
                    <p className="text-base font-extrabold pt-2">Award Ceremony</p>
                    <p className="text-sm">25 project finished</p>

                </div>

                <div data-aos="zoom-in" className="flex flex-col items-center justify-center text-base font-bold p-1 border-2 shadow-xl  py-2 rounded-2xl ">

                    <img className="w-[100px] h-[50px] rounded-lg" src={conference} alt="" />
                    <p className="text-base font-extrabold pt-2">Conference Show</p>
                    <p className="text-sm">45 project finished</p>

                </div>


                <div data-aos="fade-up" className="flex flex-col items-center justify-center text-base font-bold p-1 border-2 shadow-xl  py-2 rounded-2xl ">

                    <img className="w-[100px] h-[50px] rounded-lg" src={product} alt="" />
                    <p className="text-base font-extrabold pt-2">Product Launching</p>
                    <p className="text-sm">30 project finished</p>

                </div>

                <div data-aos="fade-down" className="flex flex-col items-center justify-center text-base font-bold p-1 border-2 shadow-xl  py-2 rounded-2xl ">

                    <img className="w-[100px] h-[50px] rounded-lg" src={expo} alt="" />
                    <p className="text-base font-extrabold pt-2">Trade & Expo</p>
                    <p className="text-sm">65 project finished</p>

                </div>

                <div data-aos="zoom-out" className="flex flex-col items-center justify-center text-base font-bold p-1 border-2 shadow-xl  py-2 rounded-2xl ">

                    <img className="w-[100px] h-[50px] rounded-lg" src={team} alt="" />
                    <p className="text-base font-extrabold pt-2">Team Building</p>
                    <p className="text-sm">41 project finished</p>

                </div>


                <div data-aos="fade-down" className="flex flex-col items-center justify-center text-base font-bold p-1 border-2 shadow-xl py-2 rounded-2xl ">

                    <img className="w-[100px] h-[50px] rounded-lg" src={meeting} alt="" />
                    <p className="text-base font-extrabold pt-2">Meeting Expo</p>
                    <p className="text-sm">91 project finished</p>

                </div>


            </div>
        </div>
    );
};

export default Choose;