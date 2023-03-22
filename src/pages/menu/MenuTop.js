import React from 'react';
import { Link } from 'react-router-dom';
import './MenuTop.css';

const MenuTop = () => {
    return (
        <div className='MenuTop'>
                <div className='MenuTopdisplay'>
                    <img className='menu_btxt1' src='images/menu_btxt_221109.png' alt='' ></img>
                </div>
                <Link to='/Coffee'><div className='Menubtn1'><p>자세히보기</p></div></Link>
        </div>
    );
};

export default MenuTop;