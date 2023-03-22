import axios from 'axios';
import React, { useState } from 'react';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';
import './WriteCoffee.css';

const Writepage = () => {
    const [formData,setFormData] = useState({
        w_name: "",
        w_bigcategory: "coffee",
        w_category: "",
        w_img: "",
        w_price: "",
        w_capacity:null,
        w_amount:null,
        w_fat:null,
        w_sugars:null,
        w_caffeine: null,
        w_desc:""
    })
    const onChange = (e) =>{
        const { name , value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData.w_bigcategory);
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
        setFormData({
            w_name: "",
            w_bigcategory: "coffee",
            w_category: "",
            w_img: "",
            w_price: "",
            w_capacity:null,
            w_amount:null,
            w_fat:null,
            w_sugars:null,
            w_caffeine: null,
            w_desc:""
        });

    }
    const addAW = () => {
        axios.post(`${API_URL}/AWWite`,formData)
        .then(res=>{
            alert("등록되었습니다.");
        })
        .catch(e=>console.log(e))
    }
    return (
        <div id="Writecoffee">
            <Title title="AW ADD " desc="메뉴 및 상품을 추가해주세요 !"/>
            <div>
            <form onSubmit={onSubmit}>
                <table className='writetable'>
                    <tbody>
                        <tr className='menuname'>
                            <td >Name</td>
                            <td><input type="text" name="w_name" 
                            value={formData.w_name}
                            onChange={onChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <select className='categoryselect' name='w_bigcategory' onChange={onChange} value={formData.w_bigcategory}>
                                <option value="coffee">coffee</option>
                                <option value="food">food</option>
                                <option value="product">product</option>
                                <option value="card">card</option>
                            </select>
                        </tr>
                        <tr>                   
                            {formData.w_bigcategory === "coffee" ?
                            <><td>Coffee Category</td> 
                            <select className='categoryselect2' name='w_category' onChange={onChange} value={formData.w_category}>
                                <option value="">선택해주세요</option>
                                <option value="콜드 브루">콜드 브루</option>
                                <option value="브루드 커피">브루드 커피</option>
                                <option value="에스프레소">에스프레소</option>
                                <option value="프라푸치노">프라푸치노</option>
                                <option value="블렌디드">블렌디드</option>
                                <option value="AW 리프레셔">AW 리프레셔</option>
                                <option value="AW 피지오">AW 피지오</option>
                                <option value="티(티바나)">티(티바나)</option>
                            </select></> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "coffee" ?
                            <><td>Capacity</td>
                            <td><input type="text" name="w_capacity" 
                            value={formData.w_capacity}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "coffee" ?
                            <><td>Amount</td>
                            <td><input type="text" name="w_amount" 
                            value={formData.w_amount}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "coffee" ?
                            <><td>Fat</td>
                            <td><input type="text" name="w_fat" 
                            value={formData.w_fat}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "coffee" ?
                            <><td>Sugars</td>
                            <td><input type="text" name="w_sugars" 
                            value={formData.w_sugars}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "coffee" ?
                            <><td>Caffeine</td>
                            <td><input type="text" name="w_caffeine" 
                            value={formData.w_caffeine}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr>
                            {formData.w_bigcategory === "food" ? 
                            <><td>Food Category</td>
                            <select className='categoryselect3' name='w_category' onChange={onChange} value={formData.w_category}>
                                <option value="">선택해주세요</option>
                                <option value="브레드">브레드</option>
                                <option value="케이크">케이크</option>
                                <option value="샌드위치 & 샐러드">샌드위치 & 샐러드</option>
                                <option value="따뜻한 푸드">따뜻한 푸드</option>
                                <option value="과일 & 요거트">과일 & 요거트</option>
                                <option value="스낵 & 미니 디저트">스낵 & 미니 디저트</option>
                                <option value="아이스크림">아이스크림</option>
                            </select></> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "food" ?
                            <><td>Capacity</td>
                            <td><input type="text" name="w_capacity" 
                            value={formData.w_capacity}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "food" ?
                            <><td>Amount</td>
                            <td><input type="text" name="w_amount" 
                            value={formData.w_amount}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "food" ?
                            <><td>Fat</td>
                            <td><input type="text" name="w_fat" 
                            value={formData.w_fat}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr className='detailwritepage'>                   
                        {formData.w_bigcategory === "food" ?
                            <><td>Sugars</td>
                            <td><input type="text" name="w_sugars" 
                            value={formData.w_sugars}
                            onChange={onChange}
                            /></td>
                            </> : null }
                        </tr>
                        <tr>
                            {formData.w_bigcategory === "product" ? 
                            <><td>Product Category</td>
                            <select className='categoryselect4' name='w_category' onChange={onChange} value={formData.w_category}>
                                <option value="">선택해주세요</option>
                                <option value="머그">머그</option>
                                <option value="글라스">글라스</option>
                                <option value="플라스틱 텀블러">플라스틱 텀블러</option>
                                <option value="스테인리스 텀블러">스테인리스 텀블러</option>
                                <option value="악세서리">악세서리</option>
                                <option value="커피 용품">커피 용품</option>
                            </select></> : null }
                        </tr>
                        <tr>
                            {formData.w_bigcategory === "card" ? 
                            <><td>Card Category</td>
                            <select className='categoryselect2' name='w_category' onChange={onChange} value={formData.w_category}>
                                <option value="">선택해주세요</option>
                                <option value="실물카드">실물카드</option>
                                <option value="AW GIFT 카드">AW GIFT 카드</option>
                            </select></> : null }
                        </tr>

                        <tr>
                            <td>Img</td>
                            <td>
                                <input type="file" name="w_img" 
                                onChange={onChangeImage}
                                 />
                                {formData.w_img && <div>
                                    <img src={`${API_URL}/upload/${formData.w_img}`}
                                    width="80px" alt=""/>
                                    </div>}
                            </td>
                        </tr>
                        <tr>
                            <td>Pirce</td>
                            <td>
                                <input type="number" min={1000} step={500} name="w_price"
                                value={formData.w_price} onChange={onChange}
                                /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Info</td>
                            <td>
                                <textarea name="w_desc"
                                value={formData.w_desc} onChange={onChange}
                                />
                            </td>
                        </tr>
                        <tr >
                            <td colSpan={2} className='buttonar'>
                                <button className='ADD' type="submit">ADD</button>
                                <button className='RESET' type="reset">RESET</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </div>
    );
};

export default Writepage;