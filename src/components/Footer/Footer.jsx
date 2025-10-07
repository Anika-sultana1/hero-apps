import React from 'react';
import facebook from '../../assets/icons8-facebook-50.png'
import linkdin from '../../assets/icons8-linkedin-30.png'  
import twitter from '../../assets/icons8-twitter-30.png'  
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
 <div className='bg-[#001931] text-white p-10'>
         <footer className=" sm:footer-horizontal ">
  <aside className='flex gap-1'>
    <img className='w-[30px] h-[30px]' src={logo} alt="" />
   <p className='  font-bold text-xl'>HERO.IO</p>
  </aside>
   </footer>
  <nav className='flex flex-col ml-[1005px]'>
    <h6 className="font-semibold mb-1">Social Links</h6>
    <div className="flex  gap-4">
      <a  className='bg-white w-[20px] h-[20px] rounded-full '>
        <img className=' ' src={twitter} alt="" />
      </a>
      <a  className='bg-white w-[20px] h-[20px] rounded-full '>
        <img src={linkdin} alt="" />
      </a>
      <a  className='bg-white w-[20px] h-[20px] rounded-full'>
        <img src={facebook} alt="" />
      </a>
    </div>
   
  </nav>
 
    <div className="mb-3 text-[#707070] border"></div>
    <div className='text-center'>
        <p className='text-white'>Copyright © 2025 - All right reserved</p>
    </div>

 </div>
    );
};

export default Footer;