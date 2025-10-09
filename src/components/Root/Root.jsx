import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Loader from '../pages/loader';


const Root = () => {

    const navigation = useNavigation()

    return (
        <div>
            <Navbar></Navbar>
           {
            navigation.state === 'loading' && <Loader></Loader>
           }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;