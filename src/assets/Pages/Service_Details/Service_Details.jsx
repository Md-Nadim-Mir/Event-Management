import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Service_Details_Show from "./Service_Details_Show";


const Service_Details = () => {

    // dynamycally params get id
    let {id}=useParams();
    // console.log(id)

    // load data 
    let info=useLoaderData();
    // console.log(info)
    

    // useState
    let [service,setService]=useState({});


    // useEffect use 

    useEffect( ()=>{

        let details=info.find(data=>(data.id == id));
        setService(details);

    },[info,id])

    return (
        <div>
                 <Service_Details_Show service={service}></Service_Details_Show>
        </div>
    );
};

export default Service_Details;