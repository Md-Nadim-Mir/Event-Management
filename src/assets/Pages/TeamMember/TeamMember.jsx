import { useEffect, useState } from "react";
import TeamData from "./TeamData";


const TeamMember = () => {

    let [teams,setTeams]=useState([]);

    useEffect(()=>{


        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setTeams(data))


    },[])


    return (

        <div>
              <h1 data-aos="zoom-in" className="text-center font-bold text-3xl md:text-5xl pt-10 pb-5 text-[#36e8f8]"> Our Team <span className="text-black">Profile</span></h1>

              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-16">
                   {
                      teams.map(team=><TeamData key={team.id} team={team}></TeamData>)
                   }
              </div>
        </div>
    );
};

export default TeamMember;