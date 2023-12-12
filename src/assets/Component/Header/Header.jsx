import { NavLink } from "react-router-dom";
import './Header.css'
import { AuthContext } from "../../Pages/AuthtProvider/AuthtProvider";
import { useContext } from "react";
 
import profile from '../../../../public/user.png'
import ab from '../../../../public/ab.png'



const Header = () => {

  let { user, LogOut } = useContext(AuthContext);
  console.log(user);


  let signOut = () => {


    LogOut()
      .then()
      .catch()


  }

  return (

    <div className="navbar  md:px-10 lg:px-2 xl:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul id="sidebar" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-bold">


            <li><NavLink to='/'> Home</NavLink></li>
            <li><NavLink to='/projects'> Complete Projects</NavLink></li>
            <li><NavLink to='/team-member'> Team Member</NavLink></li>
            <li><NavLink to='/history'>History</NavLink></li>
            <li><NavLink to='/register'> Register</NavLink></li>

          </ul>
        </div>

        <a className="text-xl">
          <img className="w-[200px] h-[100px] rounded-xl " src={ab} alt="" />
        </a>

      </div>

      <div className="navbar-center hidden lg:flex">
        <ul id="sidebar" className="menu menu-horizontal  text-base font-bold">

          <li className="mx-1"><NavLink to='/'> Home</NavLink></li>
          <li className="mx-1"><NavLink to='/projects'> Complete Projects</NavLink></li>
          <li className="mx-1"><NavLink to='/team-member'> Team Member</NavLink></li>
          <li><NavLink to='/history'>History</NavLink></li>
          <li className="mx-1"><NavLink to='/register'> Register</NavLink></li>


        </ul>
      </div>
      <div className="navbar-end">

        <div className="flex flex-col justify-between items-center  md:pr-5 lg:pr-0 xl:pr-5">

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img   src={user?.photoURL ? user.photoURL : profile} />
            </div>
          </label>
          <p className="hidden md:inline text-black text-center font-semibold">{user?.displayName ? user.displayName : 'Unknown'}</p>

        </div>

        {
          user ?
            <div className="flex items-center">
              {/* <p>{user.email}</p> */}
              <button onClick={signOut} className="btn ml-2 font-bold">Logout</button>
            </div>
            :

            <NavLink to='/login'>
              <button className="btn ml-2">Login</button>
            </NavLink>

        }

      </div>
    </div>

  );
};

export default Header;