import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getStumbler } from '../../modules/product';
import Stumbleritem from './Stumbleritem';

const Stumbler = ({text}) => {
    const PRODUCTSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.product.stumbler);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getStumbler(PRODUCTSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="스테인리스 텀블러" desc=""/>
                <Stumbleritem  item={data} />
            </div>
        );
};

export default Stumbler;