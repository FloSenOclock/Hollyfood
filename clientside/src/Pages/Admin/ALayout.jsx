import React from 'react';
import { Outlet } from 'react-router-dom';	

const ALayout = () => {
    return (
        <div className='ALayout'>
            <h2>Layout Admin</h2>
            <Outlet/>
        </div>
    );
};

export default ALayout;