import React from 'react';
import TopApp from './TopApp';
import { Link } from 'react-router';

const TopApps = ({data}) => {
   
    return (
        <div className='text-center pb-5'>
            <div className='text-center py-5'>
                <h1 className='font-bold text-2xl my-3'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-3 py-3'>
           {
            data.map((app) => <TopApp key={app.id} app = {app}></TopApp>)
           }
            </div>
            <Link to={'/apps'}><button className='my-2 text-[white] bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[10px] p-3 px-8 ml-2'>Show All</button></Link>
        </div>
    );
};

export default TopApps;