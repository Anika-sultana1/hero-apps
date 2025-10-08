import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const Navbar = () => {

  const links = <>
  <Link to={'/'}>  <li  className=' hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text hover:text-transparent  hover:border border-b-[#9F62F2] m-2'>Home</li></Link>
  <Link to={'/apps'}>  <li  className='hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text hover:text-transparent  hover:border border-b-[#9F62F2] m-2'>Apps</li></Link>
    <Link to={'/Installation'}><li  className='hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text hover:text-transparent  hover:border border-b-[#9F62F2] m-2'>Installation</li></Link>
    </>



    return (
        <div className='max-w-[1200px] mx-auto p-3'>
            <div className="navbar ">
  <div className="navbar-start flex gap-1">
    <Link to={'/'}><img className='w-[30px] h-[30px]' src={logo} alt="" /></Link>
    <a className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent   font-bold text-xl"> HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
{
    links
}
    </ul>
  </div>
  <div className="navbar-end ">
    
    <a    
    href="https://github.com/Anika-sultana1/hero-apps" 
    target="_blank" 
     className="btn text-[white] bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 ml-2">Contribute</a>
  </div>
</div>
</div>
    );
};

export default Navbar;