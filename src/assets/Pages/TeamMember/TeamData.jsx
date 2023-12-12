       
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TeamData = ({ team }) => {

    let { image, name, post, expert } = team;

    useEffect(()=>{

        AOS.init({duration:2500});
    
       },[])

    return (


        <div data-aos="zoom-in" className="card card-compact w-full bg-base-100 shadow-xl">

            <figure><img className="h-[200px] w-full" src={image} /></figure>

            <div className="card-body">

                

                <h1 className="text-2xl font-extrabold">{name}</h1>

                <h2 className='font-bold text-base'>Designation : {post}</h2>

                <h2 className="font-semibold">{expert}</h2>



            </div>
        </div>
    );
};

export default TeamData;