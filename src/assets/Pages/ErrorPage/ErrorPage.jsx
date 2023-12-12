import { NavLink } from "react-router-dom";
import Header from "../../Component/Header/Header";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const ErrorPage = () => {

    useEffect(()=>{

        AOS.init({duration:2500});
    
       },[])

    return (
        <div>
            <Header></Header>
            
            <div className="text-center font-bold text-base md:text-2xl pt-20 md:pt-28">

               <h1 data-aos="fade-up">Opps the page is not available.</h1>

               <NavLink to="/" data-aos="zoom-in"><button className="btn btn-primary text-base font-bold text-white my-5">Go to Home</button></NavLink>


        </div>

        </div>
    );
};

export default ErrorPage;