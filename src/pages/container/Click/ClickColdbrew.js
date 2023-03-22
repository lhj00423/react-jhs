import React, { useEffect, useState } from 'react';
import Blend from '../../detailcoffee/Blend';
import Brewdcoffee from '../../detailcoffee/Brewdcoffee';
import Coldbrew from '../../detailcoffee/Coldbrew';
import Esopress from '../../detailcoffee/Esopress';
import Fizzio from '../../detailcoffee/Fizzio';
import Frapp from '../../detailcoffee/Frapp';
import Refres from '../../detailcoffee/Refres';
import Tea from '../../detailcoffee/Tea';
import '../Coffee.css'


const ClickColdbrew = () => {
    const [checkList, setCheckList] = useState(['coldbrew']);
        // 체크박스 전체선택시 모두선택 체크박스 활성화시키기
    const handleCheck = e => {
        e.target.checked
        ? setCheckList([...checkList, e.target.name])
        : setCheckList(checkList.filter(el => el !== e.target.name));
    };
    
    // 전체체크 선택시 전체 선택 or 전체해제
    const checkAll = e => {
        e.target.checked ? setCheckList(['coldbrew', 'brewdcoffee','esopress','frapp','blend','refres','fizzio','tea']) : setCheckList([]);
    };
    useEffect(()=>{
       
    },[checkList])
    return (
        <div id='Coffee'>
            <h2>COFFEE</h2>
            <div id='select'>
                <div id='selecttitle'>
                    <p className='look'>분류보기</p>
                    
                </div>
                <div>
                    <div id='check'>
                        <button className="green">카테고리</button>
                    </div>
                    <ul className='selectmenu'>
                        <li><input type="checkbox" onChange={checkAll} name="checkAll" checked={checkList.length === 8 ? true : false}  /><label>전체상품보기</label></li>
                        <li><input type="checkbox" name="coldbrew"onChange={handleCheck} checked={checkList.includes('coldbrew') ? true : false} /><label>콜드 브루 커피</label></li>
                        <li><input type="checkbox" name="brewdcoffee"onChange={handleCheck} checked={checkList.includes('brewdcoffee') ? true : false}/><label>브루드 커피</label></li>
                        <li><input type="checkbox" name="esopress"onChange={handleCheck} checked={checkList.includes('esopress') ? true : false}/><label>에스프레소</label></li>
                        <li><input type="checkbox" name="frapp"onChange={handleCheck} checked={checkList.includes('frapp') ? true : false}/><label>프라푸치노</label></li>
                        <li><input type="checkbox" name="blend"onChange={handleCheck} checked={checkList.includes('blend') ? true : false}/><label>블렌디드</label></li>
                        <li><input type="checkbox" name="refres"onChange={handleCheck} checked={checkList.includes('refres') ? true : false}/><label>AW 리프레셔</label></li>
                        <li><input type="checkbox" name="fizzio"onChange={handleCheck} checked={checkList.includes('fizzio') ? true : false}/><label>AW 피지오</label></li>
                        <li><input type="checkbox" name="tea"onChange={handleCheck} checked={checkList.includes('tea') ? true : false}/><label>티(티바나)</label></li> 
                    </ul>
                    <div className='menuview'>
                        { checkList.includes('coldbrew') && <Coldbrew text="콜드 브루"/> }
                        { checkList.includes('brewdcoffee') && <Brewdcoffee text="브루드 커피"/>}
                        { checkList.includes('esopress') && <Esopress text="에스프레소"/>}
                        { checkList.includes('frapp') &&<Frapp text="프라푸치노"/>}
                        { checkList.includes('blend') && <Blend text="블렌디드"/> }
                        { checkList.includes('refres') && <Refres text="AW 리프레셔"/> }
                        { checkList.includes('fizzio') && <Fizzio text="AW 피지오"/> }
                        { checkList.includes('tea') && <Tea text="티(티바나)"/> }
                    </div>
                </div>

            </div>  
        </div>
    );
};

export default ClickColdbrew;