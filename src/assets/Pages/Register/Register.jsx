import { Form, Link, useNavigate } from "react-router-dom";
import './Register.css'
import { useContext, useState } from "react";
import { AuthContext } from "../AuthtProvider/AuthtProvider";
import swal from 'sweetalert';


const Register = () => {

    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    let { createUser, googleLoginPopUP, githubLoginPopUP, name_image } = useContext(AuthContext);



    // let {createUser,googlePopLogin,githubPopLogin}=useContext(Pc)

    // // when registration is complete go to homepage

    let navigate = useNavigate();




    //  handleLogin function
    let handleLogin = (e) => {

        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;
        let password1 = e.target.password1.value;
        let name = e.target.name.value;
        let photo = e.target.photo.value;
        // let name1 = e.target.name1.value;
        let terms = e.target.terms.checked;

        // let fullName = name + name1;

        if (!terms) {

            swal("Try Again!", "Please follow our terms and condition!", "error");
            return;
        }

        if (password === password1) {

            if (!(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/).test(password)) {


                swal("Try Again!", "Password must be contain at least one capital letter ,one special character and 6 characters long!", "error");

                return;

            }


        }

        else {

            swal("Try Again!", "Password is not match!", "error");
            return;
        }

        console.log(name, photo, email, password, password1);

        createUser(email, password)
            .then(result => {

                let user = result.user;
                console.log(user);

                swal("Good Job!", "User created succesccefully!", "success");

                // update profile and name

                name_image(name, photo)
                    .then((result) => {
                        // Profile updated!
                        let user = result.user;
                        console.log(user)
                        console.log('successfull upload image and name')
                    })

                    .catch((error) => {
                        // An error occurred
                        console.log(error);
                    });

                //  form clear
                e.target.reset();

                // go to home page when registration is complete
                navigate('/');

            })
            .catch(error => {
                console.log(error);
                swal("Try Again!", "Already use this email for create an account!", "error");
            })





    }



    // handle Google with popup

    let handleGoogle = () => {

        googleLoginPopUP()
            .then(result => {
                console.log(result.user)

                swal("Good Job!", "User login successfuly!", "success");

                // go to home page
                navigate('/');
            })

            .catch(error => {

                console.log(error)

            })

    }


    // handle github with popup

    let handleGithub = () => {

        githubLoginPopUP()
            .then(result => {
                console.log(result.user)
                swal("Good Job!", "User login successfuly!", "success");

                // go to home page
                navigate('/');
            })

            .catch(error => {

                console.log(error)

            })

    }


    return (


        <div className="hero  bg_img pb-14">
            <div className="hero-content flex-col">

                <div className="text-center mb-5 mt-16">

                    <h1 className="text-2xl md:text-4xl font-extrabold">Register now!</h1>

                </div>

                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <Form className="font-semibold" onSubmit={handleLogin}>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Full Name:</span>
                                </label>

                                <input type="text" name="name" placeholder="First Name" className="input input-bordered" required />

                            </div>




                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Image:</span>
                                </label>

                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />

                            </div>


                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />



                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="password1" placeholder="Confirm Password" className="input input-bordered" required />



                            </div>

                            {/* terms and condition checked */}

                            <div className='form-control pt-3'>

                                <div className=' flex  items-center gap-4 mb-2'>
                                    <input type="checkbox" name="terms" id="term" />
                                    <label className='font-bold' htmlFor="term">Accept  <a className='underline' href="">terms and condition.</a></label>
                                </div>

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-[green] font-bold text-white hover:bg-[green]">Register</button>
                            </div>

                            <div className="mt-5 flex gap-2  text-center">

                                <p><button onClick={handleGoogle} className="btn bg-[green] font-bold text-white hover:bg-[green] pt-2  ">Google</button></p>


                                <p><button onClick={handleGithub} className="btn bg-[green] font-bold text-white hover:bg-[green] pt-2  ">Github</button></p>


                            </div>


                        </Form>


                        <p className="font-bold"><span className="text-sm md:text-base">Have an account ?</span> Please <Link className="text-[#36e8f8] font-bold" to='/login'> Login</Link> </p>


                    </div>
                </div>
            </div>
        </div>


    );
};

export default Register;