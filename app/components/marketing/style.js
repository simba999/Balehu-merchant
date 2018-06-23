import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
flex:1;
display:flex;
justify-content:center;
align-items:center;
background-color:#FAFAFA;
`;
export const PromotionCard = styled.View`
elevation:2px;
background-color:#ffffff;
margin-top:20px;
padding-bottom:20px;
height:690px;
`;
export const CardContainer = styled.View`
padding:15px 15px 15px 15px;
elevation:2px;
background-color:#ffffff;
margin-top:20px;

`;
export const PromotionTitle = styled.View`
align-items:flex-start;
margin:15px 15px 0px 15px;

`;
export const TitleContainer = styled.View`
  align-items:flex-start;
`;
export const ButtonContainer = styled.View`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-top:15px;
`;
export const InnerButtonContainer = styled.View`
padding:0px 5px;
`;
export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.header};
text-align:left;
`;
export const TabContainer = styled.View`
border-bottom-width:1px;
border-bottom-color: #DCDCDC;
width:320;
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
