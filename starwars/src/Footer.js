import React from 'react';
import styled from 'styled-components';




const Footz = styled.div`
position:absolute;
bottom:0;
width:100%;
height:100px;
display:flex;
justify-content:space-between;
background-color:rgba(250,250,250,.3);
border-top:double;
`;


const Btn = styled.button`
font-size:3rem;
font-weight:bolder;
background-color:rgba(0,0,0,0);
border:none;
text-shadow:0 0 10px azure;
-webkit-text-stroke:.5px azure;
font-family:oblique;
color:#443e3e;
`;



export default function Footer(){
    return (
        <Footz>
                <Btn>&copy;StarWarzFoRealz</Btn>


                <Btn>Twitter:@StarWarzFoReal</Btn>
        </Footz>
    )
}