import styled from "styled-components/native";
import Theme from '../../../theme';


export const ContentContainer = styled.View`
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
text-align:center;
`;
export const KeyText = styled.Text`
color:#000000;
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midregular};
margin:15px 0px 20px 0px;
`;
export const BackupText = styled.Text`
color:${props=> Theme.colors.lightBlue};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.itemHeader};
margin-top:40px;
text-align:center;

`;

export const ButtonContianer = styled.View`
display:flex;
justify-content:center;
align-items:center;
margin-top:80px;
`;
