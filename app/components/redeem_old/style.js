import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
flex:1;
padding:0px;
background-color:#ffffff;
`;
export const RowContainer = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
border-bottom-width:1px;
border-bottom-color: #DCDCDC;
padding:15px 0px;
`;
export const DetailContainer = styled.View`

`;
export const ButtonContianer = styled.View`
  align-items:center;
  justify-content:center;

`;


export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.normal};
`;
export const PriceText = styled.Text`
color:${props => Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.normal};
margin-top:5px;
`;
