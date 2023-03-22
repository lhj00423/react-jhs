import React, { useState } from 'react';

const WriteContent = () => {
    const [formData,setFormData] = useState({
        c_title:"",
        c_day:"",
        c_img:"",
        c_desc:"",
        c_content:""
    })
    return (
        <div id = "Writecoffee">
            <Title Title="AW CONTNENT ADD" desc="AW의 소식을 전해주세요!"/>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>
                               <input type="text" name='c_title'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Day</td>
                            <td>
                                <input type="text" name='c_day' />
                            </td>
                        </tr>
                        <tr>
                            <td>Img</td>
                            <td>
                                <input type="file" name='c_img'/>
                                </td>
                        </tr>
                        <tr>
                            <td>Header Desc</td>
                            <td>
                                <input type="text" name ='c_desc'/>
                            </td>
                        </tr>
                        <tr>
                            <td>CONTNENT</td>
                            <td>
                                <input type="text" name ='c_content'/>
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

export default WriteContent;