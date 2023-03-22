import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title2 from '../../components/Title2';
import { API_URL } from '../../config/apiurl';
import { getFrapp } from '../../modules/special';
import Frappitem from './Frappitem';



const Frapp = ({text}) => {
    const CPData = async () => {
    const data = await axios.get(`${API_URL}/AW/${text}`);
    return data;
    }
    CPData();
    const {loading, data, error} = useSelector(state=>state.special.frapp);
    const dispatch = useDispatch();
    useEffect(()=>{ 
        dispatch(getFrapp(CPData))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없음</div>
    return (
        <div>
            <Title2 title="프라푸치노" desc="모든 음료 휘핑크림 추가 가능"/>
            <Frappitem item2={data} />
        </div>
    );
};

export default Frapp;