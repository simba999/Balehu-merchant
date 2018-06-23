import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`

`;

export const LabelText = styled.Text`
color:${props => props.price ? Theme.colors.redBalehu : Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.normal};
margin-bottom:${props=> props.primary? '10px':'20px'};
`;

export const ButtonContainer = styled.View`
display:flex;
justify-content:center;
align-items:center;
margin-top:180px;
`;
