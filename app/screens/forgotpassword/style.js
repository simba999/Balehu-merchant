import styled from "styled-components/native";
import Theme from '../../../theme';

export const ContentContainer = styled.View`
display:flex;
margin-top:-30px;
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
  margin-top:40px;
`;

export const TextInputContainer = styled.View`
margin-top:30px;
`;
