import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
  flex:1;
  background-color:#fafafa;
  padding:20px;
`;
export const PromotionCard = styled.View`
elevation:2px;
background-color:#ffffff;
padding-bottom:20px;
height:690px;
`;

export const PromotionTitle = styled.View`
align-items:flex-start;
margin:15px 15px 0px 15px;

`;
export const TitleContainer = styled.View`
  align-items:flex-start;
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
`;
