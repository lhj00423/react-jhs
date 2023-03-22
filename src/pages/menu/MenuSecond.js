import React from 'react';
import { Link } from 'react-router-dom';
import './MenuSecond.css';

const MenuSecond = () => {
    return (
        <div className='MenuSecond'>
                <div className='MenuSeconddisplay'>
                    <img className='menu_btxt2' src='images/menu_btxt2.png' alt='' ></img>
                </div>
                <Link to='/Food'><div className='Menubtn2'><p>자세히 보기</p></div></Link>
        </div>
    );
};

export default MenuSecond;