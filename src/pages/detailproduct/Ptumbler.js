import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getPtumbler } from '../../modules/product';
import Ptumbleritem from './Ptumbleritem';

const Ptumbler = ({text}) => {
    const PRODUCTSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.product.ptumbler);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getPtumbler(PRODUCTSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="플라스틱 텀블러" desc=""/>
                <Ptumbleritem  item2={data} />
            </div>
        );
};

export default Ptumbler;