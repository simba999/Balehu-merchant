import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`

`;

export const SubContainer = styled.View`
margin-top:${props => props.receiveCoin? '10px' : '20px'};
`;

export const ButtonContainer = styled.View`
justify-content:center;
align-items:center;
margin-top:20px;
`;

export const LabelContainer = styled.View`
position:absolute;
top:3px;
right:0px;
`;

export const QrCodeContainer = styled.View`
justify-content:center;
align-items:center;
margin:10px 0px;
`;

export const CoinsContainer = styled.View`
margin-top:20px;
`;

export const AmountContainer = styled.View`
margin-top:10px;
`;

export const LabelText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> props.primary ? Theme.fontSize.normal :Theme.fontSize.small};
margin-bottom:${props=> props.text ? '10px' : '0px'};
`;
