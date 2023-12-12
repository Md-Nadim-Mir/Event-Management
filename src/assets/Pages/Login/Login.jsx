import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { useContext } from "react";
import { AuthContext } from "../AuthtProvider/AuthtProvider";
import swal from 'sweetalert';



const Login = () => {

     // location identify
     let location=useLocation();
     console.log('login page ',location)
 
    //  // navigate other page
     let navigate=useNavigate();

   let {loginWithEmailandPassword}=useContext(AuthContext);


    // // when successfull login complete go to home page

     
  

    let handleLogin=(e)=>{

          e.preventDefault();

          let email=e.target.email.value;
          let password=e.target.password.value;

          console.log(email,password);

          loginWithEmailandPassword(email,password)
          .then(result=>{

              let user=result.user;
              console.log(user);

              
              swal("Good job!", "User login successfully!", "success");

            // form clear
            
            e.target.reset();

                //  login success go private route or go home 
           // navigate
           navigate(location?.state ? location.state : '/')


          })

          .catch(error=>{

              console.log(error);
             
              swal("Try Again!", "Provide valid Email or Password!", "error");

          })

    }

    return (

        <div className="hero min-h-screen bg_img pb-14">
            <div className="hero-content flex-col">

            

                <div className="text-center mb-5">

                    <h1 className="text-2xl md:text-4xl font-extrabold">Login now! </h1>

                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <Form className="font-semibold" onSubmit={handleLogin}>


                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" name="email" placeholder="email" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-[green] font-bold text-white hover:bg-[green]">Login</button>
                            </div>


                        </Form>


                        <p className="font-bold"><span className="text-sm md:text-base">New to here ?</span> Please<Link className="text-[#36e8f8] font-bold" to='/register'> Register</Link> </p>


                    </div>
                </div>
            </div>
        </div>



    );
};



export default Login;