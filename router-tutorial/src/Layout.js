import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const style = {
    background: 'lightgrey',
    padding: 16,
    fontSize: 24
}

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goArticles = () => {
        // navigate('/articles');
        navigate('/articles', { replace: true });
    }

    return (
        <div>
            <header style={style}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;