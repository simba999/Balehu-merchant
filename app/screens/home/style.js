import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
flex:1;
padding:0px;
background-color:#ffffff;
justify-content:center;
align-items:center;
`;

export const LogoText = styled.Text`
  color:${props=> Theme.colors.redBalehu};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:60px;
`;

export const HeadingText = styled.Text`
  color:${props=> Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.large};
  margin-top:-10px;
`;

export const ShopText = styled.Text`
  color:${props=> Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.header};
  margin-top:25px;
`;

export const ButtonContianer = styled.View`
 margin-top:130px;
`;

export const SignUpButtonContainer = styled.TouchableOpacity``;

export const LoginButtonContainer = styled.View`
  margin-top:30px;
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
