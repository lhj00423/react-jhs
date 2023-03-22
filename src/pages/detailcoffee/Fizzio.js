import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title2 from '../../components/Title2';

import { API_URL } from '../../config/apiurl';
import { getFizzio } from '../../modules/special';

import Fizzioitem from './Fizzioitem';



const Fizzio = ({text}) => {
    const CPData = async () => {
    const data = await axios.get(`${API_URL}/AW/${text}`);
    return data;
    }
    CPData();
    const {loading, data, error} = useSelector(state=>state.special.fizzio);
    const dispatch = useDispatch();
    useEffect(()=>{ 
        dispatch(getFizzio(CPData))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없음</div>
    return (
        <div>
            <Title2 title="AW 피지오" desc="맛있는 여름 한정 시즌 음료 출시"/>
            <Fizzioitem item2={data} />
        </div>
    );
};

export default Fizzio;