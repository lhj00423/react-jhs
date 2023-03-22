import React, { useState } from 'react';
import Accessory from '../detailproduct/Accessory';
import Coffegoods from '../detailproduct/Coffegoods';
import Glass from '../detailproduct/Glass';
import Mug from '../detailproduct/Mug';
import Ptumbler from '../detailproduct/Ptumbler';
import Stumbler from '../detailproduct/Stumbler';

const Product = () => {
    const[product , setProduct ] = useState(true);
    const[product1 , setProduct1 ] = useState(true);
    const[product2 , setProduct2 ] = useState(true);
    const[product3 , setProduct3 ] = useState(true);
    const[product4 , setProduct4 ] = useState(true);
    const[product5 , setProduct5 ] = useState(true);
    const[ischecked, setIsCheck] = useState(true);
const onChange = (e) => {
    setIsCheck(!ischecked);
    setProduct(!product)
    setProduct1(!product1)
    setProduct2(!product2)
    setProduct3(!product3)
    setProduct4(!product4)
    setProduct5(!product5)
}
    return (
        <div id='Coffee'>
            <h2>PRODUCT</h2>
            <div id='select'>
                <div id='selecttitle'>
                    <p className='look'>분류보기</p>
                </div>
                <div>
                    <div id='check'>
                        <button className="green">카테고리</button>
                    </div>
                    <ul className='selectmenu'>
                        <li><input type="checkbox" onChange={onChange} checked={ischecked} /><label>전체상품보기</label></li>
                        <li><input type="checkbox" onChange={()=>setProduct(!product)} /><label>머그</label></li>
                        <li><input type="checkbox" onChange={()=>setProduct1(!product1)}/><label>글라스</label></li>
                        <li><input type="checkbox" onChange={()=>setProduct2(!product2)}/><label>플라스틱 텀블러</label></li>
                        <li><input type="checkbox" onChange={()=>setProduct3(!product3)}/><label>스테인리스 텀블러</label></li>
                        <li><input type="checkbox" onChange={()=>setProduct4(!product4)}/><label>악세서리</label></li>
                        <li><input type="checkbox" onChange={()=>setProduct5(!product5)}/><label>커피 용품</label></li>
                    </ul>
                    <div className='menuview'>
                        { product && <Mug text="머그"/> }
                        { product1 && <Glass text="글라스"/>}
                        { product2 && <Ptumbler text="플라스틱 텀블러"/>}
                        { product3 &&<Stumbler text="스테인리스 텀블러"/>}
                        { product4 && <Accessory text="악세서리"/> }
                        { product5 && <Coffegoods text="커피 용품"/> }
                    </div>
                </div>

            </div>  
        </div>
    );
};

export default Product;