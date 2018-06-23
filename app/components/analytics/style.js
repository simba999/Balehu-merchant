import styled from "styled-components/native";
import Theme from '../../../theme';
export const MainContainer = styled.View`
  flex:1;
  background-color:#fafafa;
  padding:20px;
`;
export const CardContainer = styled.View`
  background-color:#ffffff;
  elevation:2;
  margin:20px 15px 0px 15px;
`;

export const HeaderText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.header};
text-align:left;
`;
export const HeaderContainer = styled.View`
margin:10px 10px 0px 20px;
`;
export const TitleContainer = styled.View`
margin:10px 10px 15px 20px;
align-items:flex-start;
`;
export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midregular};
`;
export const DateText = styled.Text`
color:${props => Theme.colors.warmGrey};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midregular};
margin-bottom:5px;
`;
export const ChartContainer = styled.View`
 height: 300px;
  position:relative;
  width:335px;
  padding-bottom:30px;
`;
export const ChartInnerContainer =styled.View`
flex: 1;
 margin-left: 10px ;
`;
export const RoundContentContainer =styled.View`
flex-direction: row;
justify-content:space-between;
margin-right:20px;
margin-left:50px;
`;

export const DetailCardContainer = styled.View`
  background-color:#ffffff;
  elevation:3;
  width:120px;
  align-items:flex-start;
  padding:5px 10px;
  position:absolute;
  top:${props=> props.Analytics == "Analytics" ? `45%` : `55%`};
  left:35%;
`;
export const ButtonContainer = styled.View`
justify-content:space-between;
align-items:center;
margin-top:30px;
margin-bottom:30px;
`;
