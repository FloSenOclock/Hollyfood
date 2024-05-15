import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/public/Header';
import Footer from '../../Components/public/Footer';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;