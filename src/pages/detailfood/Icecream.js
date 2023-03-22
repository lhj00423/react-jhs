import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getIcecream } from '../../modules/food';
import Icecreamitem from './Icecreamitem';




const Icecream = ({text}) => {
    const FOODSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.food.icecream);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getIcecream(FOODSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="아이스크림" desc=""/>
                <Icecreamitem item2={data}/>
            </div>
        );
};

export default Icecream;