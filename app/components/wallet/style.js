import React from 'react'
import PropTypes from 'prop-types'
import {
        TouchableOpacity,
        Text,
        View,
        Dimensions,
        TextInput,
} from 'react-native'
import styled from "styled-components/native";
import Theme from "../../../theme"


export const MainContainer = styled.View`
padding:30px 20px 0px;
background-color:#fafafa;
flex:1;
`;
export const CardContainer = styled.View`
padding:15px 15px 30px 15px;
elevation:2px;
background-color:#ffffff;
margin-bottom:20px;
`;

export const Container = styled.View`
display:flex;
flex-direction:row
justify-content:space-between;
margin-top:${props => props.primary ? '0px' : '20px'};;
`;
export const SendButtonContainer = styled.View`
  margin-top:15px
`;
export const ButtonContainer = styled.View`
  margin-top:25px
`;
export const TransactionButton = styled.View`
margin-top:20px

`;
export const SubContainer = styled.View`
width:150px;
display:flex;
flex-direction:row
justify-content:space-between;
align-items:center;
margin-top:15px;
`;



export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.header};
`;

export const CoinInfoText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.small};
margin-top:7px;
`;

export const CoinText = styled.Text`
color:${props => Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
`;
export const PriceText = styled.Text`
color:${props => Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.smallMedium};
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
