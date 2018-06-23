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
background-color:#ffffff;
`;

export const CompanyDetailContainer = styled.View`
padding-bottom:10px;
border-bottom-width:1px;
border-bottom-color:#e0e0e0;
`;

export const ImageTextContainer = styled.View`
  position:absolute;
  right:15px;
  left:20px;
  bottom:15px;
`;

export const DetailContainer = styled.View`
  flex-direction:row;
  justify-content:flex-start;
  align-items:flex-start;
  margin-top:10px;
  padding-right:10px;
`;

export const ImageText = styled.Text`
  color:#ffffff;
  font-size:${props => props.theme.fontSize.title};
  font-family:${props => props.theme.fontFamily.bold};
  font-weight:300;
  text-shadow-radius: 2px;
  text-shadow-offset: 0px 0.1px;
  text-align:left;
`;

export const DescriptionContainer = styled.View`
margin:20px 20px 0px 20px;

`;
export const IconContainer = styled.View`
margin-top:10px;
`;
export const ButtonContainer = styled.View`
margin:15px 0px;
`;
export const DescriptionText = styled.Text`
  color:#0d2445;
  padding-left:${props=> props.detail ? '0px' : '10px'};
  font-family:${props=> Theme.fontFamily.semiBold};
  font-size:${props=> Theme.fontSize.small}
`;

export const PromotionsContainer = styled.View`
  margin-top:10px;
`;

export const PromotionCardContainer = styled.View`
  padding-bottom:20px;
  border-bottom-width:1px;
  border-bottom-color:#e0e0e0;
  margin:0px 20px;
`;

export const PromotionTitle = styled.Text`
  color:${props=> Theme.colors.darkGray}
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.medium}
  margin-left:20px;
`;

export const PromotionsText = styled.Text`
  color:${props=> Theme.colors.darkGray}
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.midregular}
  margin:10px 0px
`;

export const PromotionsDetailsText = styled.Text`
  color:${props=> Theme.colors.darkGray}
  font-family:${props=> Theme.fontFamily.regular};
  font-size:${props=> Theme.fontSize.small}
`;
