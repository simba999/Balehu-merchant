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

export const TabContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  position:absolute;
  bottom:20px;
  z-index:999;
`;

export const TabItem = styled.TouchableOpacity`
    align-items:center;
    width:65px;
    height:50px;
    justify-content:center;
`;


export const FoodIconContainer = styled.View`
    background-color:${props=> props.background? props.background : '#eeeeee'};
    width:${props=> props.width? props.width : '40px'};
    height:${props=> props.height? props.height : '40px'};
    justify-content:center;
    align-items:center;
    border-radius:25px;
`;

export const TabText = styled.Text`
    color:#ffffff;
    font-family:${props=> Theme.fontFamily.bold};
    font-size:${props=> Theme.fontSize.smallMedium};
    height:18px;
    text-align:center;
`;
