import axios from 'axios';
import React, { useState } from 'react';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';
import './WriteCoffee.css';



    
const Writefood = () => {
    const [formData, setFormData] = useState({
        f_name: "",
        f_category: "브레드",
        f_img: "",
        f_price: ""
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
        axios.post(`${API_URL}/food`,formData)
        .then(res=>{
            alert("등록되었습니다.");
        })
        .catch(e=>console.log(e))
    }
    return (
        <div id="Writecoffee">
            <Title title="AW FOOD ADD" desc="음식을 추가해주세요 !"/>
            <form onSubmit={onSubmit}>
                <table className='defaulttable'>
                    <tbody>
                        <tr className='menuname'>
                            <td>Food Name</td>
                            <td><input type="text" name="f_name" 
                            value={formData.f_name}
                            onChange={onChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                                <select name='f_category' onChange={onChange} value={formData.f_category} >
                                    <option value="브레드">브레드</option>
                                    <option value="케이크">케이크</option>
                                    <option value="샌드위치 & 샐러드">샌드위치 & 샐러드</option>
                                    <option value="따뜻한 푸드">따뜻한 푸드</option>
                                    <option value="과일 & 요거트">과일 & 요거트</option>
                                    <option value="스낵 & 미니 디저트">스낵 & 미니 디저트</option>
                                    <option value="아이스크림">아이스크림</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Img</td>
                            <td>
                                <input type="file" name="f_img" 
                                onChange={onChangeImage}
                                 />
                                {formData.f_img && <div>
                                    <img src={`${API_URL}/upload/${formData.f_img}`}
                                    width="80px" alt=""/>
                                    </div>}
                            </td>
                        </tr>
                        <tr>
                            <td>Pirce</td>
                            <td>
                                <input type="number" min={1000} step={500} name="f_price"
                                value={formData.f_price} onChange={onChange}
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

export default Writefood;