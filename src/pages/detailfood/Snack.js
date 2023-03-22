import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { getSnack } from '../../modules/food';
import Snackitem from './Snackitem';


const Snack = ({text}) => {
        const FOODSData = async () => {
        const data = await axios.get(`${API_URL}/AW/${text}`);
        return data;
        }
        const {loading, data, error} = useSelector(state=>state.food.snack);
        const dispatch = useDispatch();
        useEffect(()=>{ 
            dispatch(getSnack(FOODSData))
        },[dispatch])
        if(loading) return <div>로딩중입니다.</div>
        if(error) return <div>에러가 발생했습니다.</div>
        if(!data) return <div>데이터가 없음</div>
        return (
            <div>
                <Title title="스낵 & 미니 디저트" desc=""/>
                <Snackitem  item={data} />
            </div>
        );
};

export default Snack;