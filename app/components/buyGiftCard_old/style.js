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

export const SearchContainer = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
align-items:center;
`;
export const LabelText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.regular};
font-size:${props=> Theme.fontSize.normal};
margin-top:5px;
`;

export const ButtonContianer = styled.View`
  marginTop: 40px;
  justify-content:center;
  alignItems:center;
`;

export const TextLabelContainer = styled.View`
  margin-top:10px;
`;

export const TextLabel = styled.Text`
    color:${props => Theme.colors.darkGray};
    font-family:${props=> Theme.fontFamily.bold};
    font-size:${props=> Theme.fontSize.normal};
`;
