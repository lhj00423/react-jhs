import React from 'react';
import { API_URL } from '../../config/apiurl';
import { Link } from 'react-router-dom';

const Fooditem = ({item2}) => {
    return (
        <ul className='coffeecss2'>
            <li className='coldbrewitem'>
                {item2.map(item=><div key={`${item.w_no}`}><Link to={`/Coffee/${item.w_no}`}><img src={`${API_URL}/upload/${item.w_img}`} alt=""/></Link>
                <p className='cpname'>{item.w_name}</p>
                <p className='cpprice'>{item.w_price}원</p></div>)}
            </li>
        </ul>
    );
};

export default Fooditem;