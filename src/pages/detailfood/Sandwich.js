import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getSandwich } from '../../modules/food';
import Sandwichitem from './Sandwichitem';




const Sandwich = ({text}) => {
    const FOODSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.food.sandwich);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getSandwich(FOODSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="샌드위치 & 샐러드" desc=""/>
                <Sandwichitem item={data}/>
            </div>
        );
};

export default Sandwich;