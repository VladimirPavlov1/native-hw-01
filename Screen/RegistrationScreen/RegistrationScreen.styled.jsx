import styled from "styled-components/native";



export const Form = styled.View`
position: absolute;

z-index: 10;
top:316px;

padding: 16px;

width: 100%;
height: 549px;

background-color: #fff;

`;

export const Input = styled.TextInput`
width:100%;
height: 50px;

margin-bottom: 16px;

border: 1px solid #E8E8E8;
border-radius: 8px;

background-color:#F6F6F6 ;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


`;


export const Title = styled.Text`
   
    width: 100%;
   
    
    margin-top: 92px;
    margin-bottom: 32px;

    padding-top: 24px;
    padding-bottom: 5px;
   
    

    font-family: 'Roboto-Medium';
    font-size: 30px;
    line-height: 1.17px;
    text-align: center;
    color: black;

`;

export const BtnSubmit = styled.Button`
${(props)=>console.log(props)};
height: 51px;

padding: 16px 32px;


font-family: 'Roboto-Regular';
font-size: 16px;
line-height: 1.19px;
`;





