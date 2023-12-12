import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';





const Service = ({ service }) => {

    useEffect(()=>{

        AOS.init({duration:2500});
    
       },[])
    

    let { image, title, price, id } = service;

    // console.log(service)

    return (



        <div>

            <Link to={`/service_details/${id}`}>
            
                <div data-aos="zoom-in" className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] w-full" src={image} /></figure>

                    <div className="card-body">
                        <h2 className="card-title font-bold">{title}</h2>

                        <div className="card-actions flex justify-between items-center ">

                            <button className="text-xl font-bold text-[#36e8f8]">Price : ${price}</button>

                            <button className="btn bg-[green] font-bold text-white hover:bg-[green]">Hire us</button>
                        </div>

                    </div>
                </div>
            </Link>

        </div>


    );
};

export default Service;