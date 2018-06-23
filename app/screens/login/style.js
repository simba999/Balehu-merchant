import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
flex:1;
padding:0px;
background-color:${props=> Theme.colors.darkGray};
justify-content:center;
align-items:center;
`;


export const ContentContainer = styled.View`
justify-content:center;
align-items:center;
`;

export const TextFieldContainer = styled.View`
margin-bottom:25px
`;

export const ButtonContianer = styled.View`
margin-top:80px;
`;

export const ForgotTextContainer = styled.TouchableOpacity`
margin-top:20px;
`;

export const ForgotText = styled.Text`
color:${props=> Theme.colors.twitterBlue};
font-family:${props=> Theme.fontFamily.semiBold};
font-size:${props=> Theme.fontSize.medium};
`;
