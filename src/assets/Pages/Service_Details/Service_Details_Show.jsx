
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Service_Details_Show = ({ service }) => {

    useEffect(()=>{

        AOS.init({duration:2500});
    
       },[])

    let { image, title, description, description1 } = service;

    console.log(service)


    return (
        <div className="py-10">
            <div className=" flex justify-center p-2">
                <img className="w-full md:w-3/4   h-[600px] p-2 md:p-10 border-4 border-red-400 rounded-3xl mt-2" src={image} alt="" />
            </div>

            <div className="text-center">
                <h1 data-aos="zoom-in" className="text-2xl font-extrabold py-3">{title}</h1>
            </div>

            <div>
                <p data-aos="fade-up" className="text-base font-bold px-10 py-5">
                    {description}
                </p>
            </div>

            <div>
                <p data-aos="zoom-in" className="text-base font-bold px-10">
                    {description1}
                </p>
            </div>
        </div>
    );
};

export default Service_Details_Show;