// import { Form, NavLink } from "react-router-dom";
// import swal from 'sweetalert';

import ab from '../../../../public/ab.png'


const Footer = () => {



    // let subscribe = (e) => {

    //     e.preventDefault();

    //     let email = e.target.email.value;


    //     if (email) {

    //         swal("Welcome!", "User subscription successfull!", "success");

    //     }

    //     else {

    //         swal("Opps!", "Provide your email address for subscription!", "error");
    //     }


    // }





    return (
        
        
        <div >

<footer className="footer p-10 shadow-2xl text-base-content">
  <aside>
     <div> 
          <img src={ab} className="w-[100px] h-[100px] rounded-xl" alt="" />
     </div>
    <p className="font-bold ">Event Management Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  
  <nav className="font-bold">
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 

  <nav className="font-bold">
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 

  <nav className="font-bold">
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;