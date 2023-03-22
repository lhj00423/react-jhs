import React, { useState } from 'react';
import Bread from '../detailfood/Bread';
import Cake from '../detailfood/Cake';
import Sandwich from '../detailfood/Sandwich';
import Foods from '../detailfood/Foods';
import Fruit from '../detailfood/Fruit';
import Snack from '../detailfood/Snack';
import Icecream from '../detailfood/Icecream';

const Food = () => {
    const[food , setFood ] = useState(true);
    const[food1 , setFood1 ] = useState(true);
    const[food2 , setFood2 ] = useState(true);
    const[food3 , setFood3 ] = useState(true);
    const[food4 , setFood4 ] = useState(true);
    const[food5 , setFood5 ] = useState(true);
    const[food6 , setFood6 ] = useState(true);

    const[ischecked, setIsCheck] = useState(true);
const onChange = (e) => {
    setIsCheck(!ischecked);
    setFood(!food)
    setFood1(!food1)
    setFood2(!food2)
    setFood3(!food3)
    setFood4(!food4)
    setFood5(!food5)
    setFood6(!food6)
}
    return (
        <div id='Coffee'>
            <h2>FOOD</h2>
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
                        <li><input type="checkbox" onChange={()=>setFood(!food)} /><label>브레드</label></li>
                        <li><input type="checkbox" onChange={()=>setFood1(!food1)}/><label>케이크</label></li>
                        <li><input type="checkbox" onChange={()=>setFood2(!food2)}/><label>샌드위치 & 샐러드</label></li>
                        <li><input type="checkbox" onChange={()=>setFood3(!food3)}/><label>따뜻한 푸드</label></li>
                        <li><input type="checkbox" onChange={()=>setFood4(!food4)}/><label>과일 & 요거트</label></li>
                        <li><input type="checkbox" onChange={()=>setFood5(!food5)}/><label>스낵 & 미니 디저트</label></li>
                        <li><input type="checkbox" onChange={()=>setFood6(!food6)}/><label>아이스크림</label></li>
                    </ul>
                    <div className='menuview'>
                        { food && <Bread text="브레드"/> }
                        { food1 && <Cake text="케이크"/>}
                        { food2 && <Sandwich text="샌드위치 & 샐러드"/>}
                        { food3 &&<Foods text="따뜻한 푸드"/>}
                        { food4 && <Fruit text="과일 & 요거트"/> }
                        { food5 && <Snack text="스낵 & 미니 디저트"/> }
                        { food6 && <Icecream text="아이스크림"/> }
                    </div>
                </div>

            </div>  
        </div>
    );
};

export default Food;