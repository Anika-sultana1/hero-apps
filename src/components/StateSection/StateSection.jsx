import React from 'react';
import PhoneImg from '../../assets/hero.png'

const StateSection = () => {
    return (
        <div className='my-10 flex flex-col justify-center items-center'>
            <img src={PhoneImg} alt="" />
            <div className='bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] p-15 w-full'>
                <div className='text-center'>
                    <h1 className='font-bold text-white text-4xl mb-8'>Trusted by Millions, Built for You</h1>
              <div className='flex justify-center items-center gap-20'>
                      <div className='text-white'>
                        <h3>Total Downloads</h3>
                        <p className='font-extrabold text-5xl my-3'>29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <h3>Total Reviews</h3>
                        <p className='font-extrabold text-5xl my-3'>906K</p>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <h3>Active Apps</h3>
                        <p className='font-extrabold text-5xl my-3'>132+</p>
                        <p>31 more will Launch</p>
                    </div>
              </div>
                </div>

            </div>
        </div>
    );
};

export default StateSection;