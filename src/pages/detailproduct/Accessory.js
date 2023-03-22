import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getAccessory } from '../../modules/product';
import Accessoryitem from './Accessoryitem';

const Accessory = ({text}) => {
    const PRODUCTSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.product.accessory);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getAccessory(PRODUCTSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="악세서리" desc=""/>
                <Accessoryitem  item2={data} />
            </div>
        );
};

export default Accessory;