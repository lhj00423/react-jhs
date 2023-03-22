import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getGlass } from '../../modules/product';
import Glassitem from './Glassitem';


const Glass = ({text}) => {
    const PRODUCTSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.product.glass);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getGlass(PRODUCTSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="글라스" desc=""/>
                <Glassitem  item2={data} />
            </div>
        );
};

export default Glass;