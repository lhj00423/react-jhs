import React from 'react';
import { Link } from 'react-router-dom';
import './MenuThrid.css';

const MenuThrid = () => {
    return (
        <div className='MenuThrid'>
                <div className='MenuThridisplay'>
                    <img className='menu_btxt3' src='images/menu_btxt3.png' alt='' ></img>
                </div>
                <Link to='/Product'><div className='Menubtn3'><p>자세히 보기</p></div></Link>
        </div>
    );
};

export default MenuThrid;