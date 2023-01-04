import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const style = {
        background: 'lightgrey',
        padding: 16,
        fontSize: 24
    }
    return (
        <div>
            <header style={style}>Header</header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;