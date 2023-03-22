import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getBread } from '../../modules/food';
import Breaditem from './Breaditem';

const Bread = ({text}) => {
        const FOODSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.food.bread);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getBread(FOODSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="브레드" desc=""/>
                <Breaditem  item={data} />
            </div>
        );
};

export default Bread;