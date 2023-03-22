import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title2 from '../../components/Title2';
import { API_URL } from '../../config/apiurl';
import { getBlend } from '../../modules/special';
import Blenditem from './Blenditem';


const Blend = ({text}) => {
    const CPSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.special.blend);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getBlend(CPSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title2 title="블렌디드" desc="디카페인 에스프레소 샷추가기능 (일부 음료 제외)"/>
                <Blenditem item2={data}/>
            </div>
        );
};

export default Blend;