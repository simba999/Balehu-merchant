import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
flex: 1;
background-color: #FAFAFA;
alignItems: center;
`;
export const Tabcontainer = styled.View`
margin:20px 20px 0px 20px;
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

export const NotificationContainer = styled.View`
  position:absolute;
  height:18;
  width:18;
  background-color:${props => Theme.colors.white};
  border-radius:9px;
  justify-content:center;
  align-items:center;
  left:153px;
  top:25px;
`;
export const NotificationText = styled.Text`
  color:${props => Theme.colors.lightBlue};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.semiSmall};
`;
