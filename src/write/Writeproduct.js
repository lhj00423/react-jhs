import axios from 'axios';
import React, { useState } from 'react';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';
import './WriteCoffee.css';

const Writeproduct = () => {
    const [formData, setFormData] = useState({
        p_name: "",
        p_category: "머그",
        p_img: "",
        p_price: ""
    }) 
    const onChange = (e) =>{
        const { name , value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const onChangeImage= (e) => {
        const {name} = e.target;
        //폼테크 생성하기
        const imageFormData = new FormData();
        //폼태그에 데이터 추가하기
        imageFormData.append('img',e.target.files[0]);
        //전송
        axios.post(`${API_URL}/upload`,imageFormData,{
            headers:{'content-type':'multipart/formdata'}
        }).then(res=>{
            console.log(res);
            setFormData({
                ...formData,
                [name]: res.data.imageUrl
            })
            console.log(formData)
        })
        .catch(e=>console.log(e))
    }
    //폼전송
    const onSubmit = (e) => {
        //form 태그 전송 이벤트 삭제
        e.preventDefault();
        //인풋체크후 addEvnet 호출
        addAW();

    }
    const addAW = () => {
        axios.post(`${API_URL}/product`,formData)
        .then(res=>{
            alert("등록되었습니다.");
        })
        .catch(e=>console.log(e))
    }
    return (
        <div id="Writecoffee">
            <Title title="AW PRODUCT ADD" desc="상품을 추가해주세요"/>
            <form onSubmit={onSubmit}>
                <table className='defaulttable'>
                    <tbody>
                        <tr  className='menuname'>
                            <td>Food Name</td>
                            <td><input type="text" name="p_name" 
                            value={formData.p_name}
                            onChange={onChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                                <select name='p_category' onChange={onChange} value={formData.p_category} >
                                    <option value="머그">머그</option>
                                    <option value="글라스">글라스</option>
                                    <option value="플라스틱 텀블러">플라스틱 텀블러</option>
                                    <option value="스테인리스 텀블러">스테인리스 텀블러</option>
                                    <option value="악세서리">악세서리</option>
                                    <option value="커피 용품">커피 용품</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Img</td>
                            <td>
                                <input type="file" name="p_img" 
                                onChange={onChangeImage}
                                 />
                                {formData.p_img && <div>
                                    <img src={`${API_URL}/upload/${formData.p_img}`}
                                    width="80px" alt=""/>
                                    </div>}
                            </td>
                        </tr>
                        <tr>
                            <td>Pirce</td>
                            <td>
                                <input type="number" min={1000} step={500} name="p_price"
                                value={formData.p_price} onChange={onChange}
                                /> 
                            </td>
                        </tr>
                        <tr className='buttonar'>
                            <td colSpan={2}>
                                <button className='ADD' type="submit">ADD</button>
                                <button className='RESET' type="reset">RESET</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Writeproduct;