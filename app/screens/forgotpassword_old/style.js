import styled from "styled-components/native";
import Theme from '../../../theme';

export const HeadingTextContainer = styled.View`
margin:0px 0px 10px 0px;
`;

export const ContentContainer = styled.View`
display:flex;
min-height:430px;
padding:20px;
align-items:center;
`;

export const HeadingText = styled.Text`
color:${props=> Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.large};
`;

export const DetailText = styled.Text`
color:#000000;
font-family:${props=> Theme.fontFamily.regular};
font-size:${props=> Theme.fontSize.midregular};
margin-top:20px;
`;

export const ButtonContianer = styled.View`
  margin-top:20px;
`;

export const TextInputContainer = styled.View`
margin-top:30px;
`;
