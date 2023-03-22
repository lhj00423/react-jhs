import React from 'react';
 
//스타일 변경
const titleStyle ={
    fontSize : "24px",

}
const titlediv = {
    padding: "20px",
    background: "#f4f4f2",
    marginBottom: "20px",
    borderRadius: "3px",

}

const imgstyle = {
    width:"45px",
    hegiht:"36px",

}
const pstyle = {
    display:"flex",
    alignItems :"center"
}

const Title2 = ({title,desc}) => {
    return (
        <div style={titleStyle}>
            <div style={titlediv}>
                <p style={pstyle}>{title}<img src='images/logo_decaf.png' alt='' style={imgstyle}/><span>{desc}</span></p> 
            </div>
           
           
        </div>
    );
};

export default Title2;