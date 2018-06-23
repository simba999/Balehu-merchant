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

export const Container = styled.View`
display:flex;
flex:1;
background-color:white;
padding:60px 20px 40px 20px;
`;

export const TitleText = styled.Text`
text-align:center;
color:${props => Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.title}
margin-bottom:20px;
`;

export const LabelText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.regular};
font-size:${props=> Theme.fontSize.normal};
`;
