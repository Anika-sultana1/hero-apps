import React from 'react';
import facebook from '../../assets/icons8-facebook-50.png'
import linkdin from '../../assets/icons8-linkedin-30.png'  
import twitter from '../../assets/icons8-twitter-30.png'  
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
 <div className='bg-[#001931] text-white p-10'>
         <footer className=" sm:footer-horizontal ">
  <aside className='flex justify-center items-center my-3 gap-1'>
    <img className='w-[30px] h-[30px]' src={logo} alt="" />
   <p className='  font-bold text-xl'>HERO.IO</p>
  </aside>
   </footer>
<footer className="footer sm:footer-horizontal  bg-[#113658] text-neutral-content p-10 rounded-2xl">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
  
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">FAQs</a>
    <a className="link link-hover">Tutorials</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
    <nav className='flex flex-col '>


    <h6 className="font-semibold mb-1">Social Links</h6>
    <div className="flex  gap-4">
      <a  className='rounded-2xl'>
        <img className='bg-[#0057a8]  w-[30px] h-[30px] ' src={twitter} alt="" />
      </a>
      <a  className=' rounded-2xl '>
        <img className='bg-[#0057a8]  w-[30px] h-[30px]' src={linkdin} alt="" />
      </a>
      <a  className='bg-white rounded-2xl '>
        <img className='bg-[#0057a8]  w-[30px] h-[30px]' src={facebook} alt="" />
      </a>
    </div>
   
  </nav>
</footer>


 
    <div className="my-5 text-[#707070] border"></div>
    <div className='text-center'>
        <p className='text-[#9b9999]'>Copyright © 2025 - All right reserved</p>
    </div>

 </div>
    );
};

export default Footer;