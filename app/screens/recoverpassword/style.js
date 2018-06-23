import styled from "styled-components/native";
import Theme from '../../../theme';

export const ContentContainer = styled.View`
align-items:center;
`;

export const DetailText = styled.Text`
color:#000000;
font-family:${props=> Theme.fontFamily.regular};
font-size:${props=> Theme.fontSize.midregular};
margin-top:20px;
`;

export const ButtonContianer = styled.View`
  margin-top:160px;
`;

export const TextInputContainer = styled.View`
margin-top:30px;
`;
