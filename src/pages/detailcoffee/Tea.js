import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title2 from '../../components/Title2';
import { API_URL } from '../../config/apiurl';
import { getTea } from '../../modules/special';
import Teaitem from './Teaitem';

const Tea = ({text}) => {
    const CPSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.special.tea);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getTea(CPSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title2 title="티(티바나)" desc="따뜻한 음료와 차가운 음료 두가지, 인기 메뉴"/>
                <Teaitem item={data} />
            </div>
        );
};

export default Tea;