import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title2 from '../../components/Title2';
import { API_URL } from '../../config/apiurl';
import { getRefres } from '../../modules/special';
import Refresitem from './Refresitem';



const Refres = ({text}) => {
    const CPData = async () => {
    const data = await axios.get(`${API_URL}/AW/${text}`);
    return data;
    }
    CPData();
    const {loading, data, error} = useSelector(state=>state.special.refres);
    const dispatch = useDispatch();
    useEffect(()=>{ 
        dispatch(getRefres(CPData))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없음</div>
    return (
        <div>
            <Title2 title="AW 리프레셔" desc="AW에서만 즐겨 볼 수 있는 메뉴"/>
            <Refresitem item2={data} />
        </div>
    );
};

export default Refres;