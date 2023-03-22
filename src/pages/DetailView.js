import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { getBlend } from '../modules/special';

const DetailView = () => {
    const { no } = useParams();
    const CPSData = async () => {
        const data = await axios.get(`${API_URL}/AW_Product/${no}`);
         console.log(data);
         return data;
        }
        const {loading, data, error} = useSelector(state=>state.special.blend);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getBlend(CPSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
    return (
        <div>
            <div>
                <h1>{data[0].w_category}</h1>
                <ul className='magazineul'>
                    <li>
                        <img src='images/icon_home.png' alt=''/>
                        <img src='images/icon_arrow.png' alt=''/>    
                    </li>
                    <li>{data[0].w_bigcategory}<img src='images/icon_arrow.png' alt=''/></li>
                    <li>AW 리저브<img src='images/icon_arrow.png' alt=''/></li>
                    <li>RESERVE MAGAZINE</li>
                </ul>
            </div>
            <div>
                <img src={`${API_URL}/upload/${data[0].w_img}`} alt="" />
                <div>
                    <h3>{data[0].w_name}</h3>
                    <p>{data[0].w_desc}</p>
                    <div>
                        <p>제품 영양 정보</p>
                        <p>{data[0].w_capacity}</p>
                    </div>
                    <ul>
                        <li>
                            <p>1회 제공량 (kcal)</p>
                            <p>{data[0].w_amount}</p>
                        </li>
                        <li>
                            <p>포화지방 (g)</p>
                            <p>{data[0].w_fat} </p>
                        </li>
                        <li>
                            <p>당류 (g)</p>
                            <p>{data[0].w_sugars} </p>
                        </li>
                        <li>
                            <p>카페인 (mg)</p>
                            <p>{data[0].w_caffeine}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DetailView;