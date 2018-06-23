import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
  flex:1;
  background-color:#fafafa;
  padding:20px;
`;
export const CardContainer = styled.View`
elevation:2px;
background-color:#ffffff;
padding-bottom:20px;
`;

export const PromotionTitle = styled.View`
align-items:flex-start;
margin:15px 15px 0px 15px;

`;
export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.header};
text-align:left;
`;
export const RowContainer = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
`;
export const ContentContainer = styled.View`
border-bottom-width:1px;
border-bottom-color: #DCDCDC;
margin:10px 20px 10px 20px;
`;
export const InnerContainer = styled.View`
padding:10px 20px 20px 0px;
`;
export const ContentText = styled.Text`
color:${props => Theme.colors.warmGrey};
font-family:${props=> Theme.fontFamily.regular};
font-size:${props=> Theme.fontSize.small};
text-align:left;
margin-top:2px;

`;
export const RewardText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midregular};
text-align:left;
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
