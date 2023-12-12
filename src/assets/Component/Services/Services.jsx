import { useEffect, useState } from "react";
import Service from "../Service/Service";





const Services = () => {

    
    

    let [services, setServices] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))


    }, [])

    return (
        <div>
            <h1 data-aos="zoom-in" className="text-5xl pt-16 pb-8 font-extrabold text-center"><span className="text-[#36e8f8]">Featured</span> <span>Services</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10 px-4 " >

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)

                }
            </div>


        </div>
    );
};

export default Services;