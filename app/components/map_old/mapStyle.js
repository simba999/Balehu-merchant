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

let {height, width} = Dimensions.get('window');
export const IconContainer = styled.View`
background-color:#ffffff;
width:220px;
height:42px;
position:absolute;
top:-23px;
right:-15px;
z-index:999;
justify-content:space-between;
align-items:center;
margin:35px 30px 0px 0px;
flex-direction:row;
align-items:center;
`

export const PromotionText = styled.Text`
text-align:center;
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.semiBold};
font-size:${props=> Theme.fontSize.medium}
margin-right:10px;
margin-top:-3px;
margin-left:-5px;
`;

export const CheckboxContainer= styled.View`
  margin-left:10px;
  margin-top:3px;
`;
export const ModelIconContainer = styled.TouchableOpacity`
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
