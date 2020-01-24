import React, {useState, useEffect}from 'react';
import styled from 'styled-components';

const CardzContainer = styled.div`
flex:1;
height:100%;
width:100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
grid-gap:100px;
`;

const CardBlock = styled.div`
flex:1;
height:80%;
width:900px;
display:flex;
flex-direction:column;
border:solid;
justify-content:center;
align-items:center;
background-color:rgba(250,250,250,.4);
overflow-y:scroll;

`;

const Description = styled.div`
flex:1;
display:flex;
flex-direction:column;
font-size:2.5rem;
`;



const Ulist = styled.ul`
display:flex;
flex-direction:column;
justify-content:space-between;
font-size:2rem;
font-weight:bolder;
height:100%;
`;

const Img = styled.img`
width:100px;
height:100px;
animation:shwifty 3s linear infinite;
filter:drop-shadow(0px -3px 2px #000)
`;



const Title = styled.h1`
font-size:3rem;
`;


export default function Container(props){



console.log(props.byTenDescriptions);

const [val, setval] = useState(props)


return ( 
    <CardzContainer>
    
     
    
    
        <CardBlock>
            <Title><Img src={props.src}/><br />{`${val.byTenDescriptions[0]}`} </Title>
                <Description>
                <h2>Description</h2>
            <Ulist>
                    <li>{`Height: ${val.byTenDescriptions[1]}`}</li>
                    <li>{`Mass: ${val.byTenDescriptions[2]}`}</li>
                    <li>{`Gender: ${val.byTenDescriptions[3]}`}</li>
            </Ulist>
                
                </Description>
                <Description>
                    <div>
                <Ulist>
                    <li>{`Hair Color: ${val.byTenDescriptions[4]}`}</li>
                    <li>{`Skin Color: ${val.byTenDescriptions[5]}`}</li>
                    <li>{`Eye Color: ${val.byTenDescriptions[6]}`}</li>
                </Ulist>
                    </div>
                </Description>
        </CardBlock>


        <CardBlock>
            <Title><Img src={props.src}/><br />{`${val.byTenDescriptions[7]}`}</Title>
                <Description>
                <h2>Description</h2>
            <Ulist>
                    <li>{`Height: ${val.byTenDescriptions[8]}`}</li>
                    <li>{`Mass: ${val.byTenDescriptions[9]}`}</li>
                    <li>{`Gender: ${val.byTenDescriptions[10]}`}</li>
            </Ulist>
                </Description>
                <Description>
                    <div>
                <Ulist>
                    <li>{`Hair Color: ${val.byTenDescriptions[11]}`}</li>
                    <li>{`Skin Color: ${val.byTenDescriptions[12]}`}</li>
                    <li>{`Eye Color: ${val.byTenDescriptions[13]}`}</li>
                </Ulist>
                    </div>
                </Description>
        </CardBlock>


        <CardBlock>
            <Title><Img src={props.src}/><br />{`${val.byTenDescriptions[14]}`}</Title>
                <Description>
                <h2>Description</h2>
            <Ulist>
                    <li>{`Height: ${val.byTenDescriptions[15]}`}</li>
                    <li>{`Mass: ${val.byTenDescriptions[16]}`}</li>
                    <li>{`Gender: ${val.byTenDescriptions[17]}`}</li>
            </Ulist>
                </Description>
                <Description>
                    <div>
                <Ulist>
                    <li>{`Hair Color: ${val.byTenDescriptions[18]}`}</li>
                    <li>{`Skin Color: ${val.byTenDescriptions[19]}`}</li>
                    <li>{`Eye Color: ${val.byTenDescriptions[20]}`}</li>
                </Ulist>
                    </div>
                </Description>
        </CardBlock>
    
    
        <CardBlock>
            <Title><Img src={props.src}/><br />{`${val.byTenDescriptions[21]}`}</Title>
                <Description>
                <h2>Description</h2>
            <Ulist>
                    <li>{`Height: ${val.byTenDescriptions[22]}`}</li>
                    <li>{`Mass: ${val.byTenDescriptions[23]}`}</li>
                    <li>{`Gender: ${val.byTenDescriptions[24]}`}</li>
            </Ulist>
                </Description>
                <Description>
                    <div>
                <Ulist>
                    <li>{`Hair Color: ${val.byTenDescriptions[25]}`}</li>
                    <li>{`Skin Color: ${val.byTenDescriptions[26]}`}</li>
                    <li>{`Eye Color: ${val.byTenDescriptions[27]}`}</li>
                </Ulist>
                    </div>
                </Description>
        </CardBlock>
    
    
    </CardzContainer>
    )
    
    
    
    


       
}