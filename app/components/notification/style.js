import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
flex:1;
display:flex;
justify-content:center;
align-items:center;
background-color:#FAFAFA;
padding-top:20px;
`;
export const ContentContainer = styled.View`

`;
export const CardContainer = styled.View`
padding:20px 15px 40px;
elevation:2px;
background-color:#ffffff;
align-items:center;
justify-content:space-between;
margin-top:20px;

`;
export const TextContainer = styled.View`
display:flex;
flex:0.5;
`;

export const TitleContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;
export const SendContainer = styled.View`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-top:15px;
`;
export const UserContainer = styled.View`
display:flex;
flex-direction:row;
justify-content:space-between;
`;
export const ButtonContainer = styled.View`
justify-content:space-between;
align-items:center;
margin-top:30px;
`;
export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.header};
`;

export const SendText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
`;

export const UserText = styled.Text`
color:${props => Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
`;

export const DateText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.regular};
font-size:${props=> Theme.fontSize.small};
margin-top:6px;
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
`
