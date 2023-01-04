import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보이는 페이지입니다.</p>
            <ul>
                <li>
                    <Link to='/about'>소개</Link>
                </li>
                <li>
                    <Link to='/profile/starlit'>Starlit 소개</Link>
                </li>
                <li>
                    <Link to='/profile/gaeng'>Gaeng 소개</Link>
                </li>
                <li>
                    <Link to='/profile/aengsu'>Aengsu 소개</Link>
                </li>
                <li>
                    <Link to='/profile/void'>존재하지 않는 프로필</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;