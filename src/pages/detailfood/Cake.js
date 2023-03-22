import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getCake } from '../../modules/food';
import Cakeitem from './Cakeitem';

const Cake = ({text}) => {
        const FOODSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.food.cake);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getCake(FOODSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="케이크" desc=""/>
                <Cakeitem  item={data} />
            </div>
        );
};

export default Cake;