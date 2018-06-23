import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
flex:1;
display:flex;
padding:0px;
background-color: #FAFAFA;
justify-content:center;
align-items:center;
`;

export const MainSettingContainer = styled.View`
flex:1;
display:flex;
padding:0px;
background-color: #FAFAFA;
align-items:center;
margin-bottom:20px;
`;
export const ContentContainer = styled.View`
display:flex;
flex:0.8;
justify-content:center;
align-items:center;
margin-top:10px;
`;

export const TextFieldContainer = styled.View`
margin-top:25px
`;

export const ButtonContianer = styled.View`
margin-top:25px;
`;
export const LogoutButtonContianer = styled.View`
margin-top:30px;
margin-bottom:20px;
`;

export const IconContainer = styled.TouchableOpacity`
background-color:#ffffff;
width:45px;
height:45px;
padding:11px 0px;
position:absolute;
top:18px;
right:4px;
z-index:9999999;
border-radius:70px;
justify-content:center;
align-items:center;
margin-top:10px;
elevation:5
`;
