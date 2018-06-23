import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import Theme from '../../../theme';
import styled from "styled-components/native";
 const RoundContainer =styled.View`
  height:10px;
  width:10px;
  background-color:${props => props.color ? props.color:Theme.colors.redBalehu};
  border-radius:5px;
  margin-right:${props => props.value ? `7px`:`10px` };
`;
export const RoundContentContainer =styled.View`
flex-direction: row;
align-items:center;
justify-content:space-between;

`;
export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.small};
`;
export const ValueText = styled.Text`
color:${props => Theme.colors.darkGray};
margin-right:8px;
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
`;
class RowComponent extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {

    return(
      this.props.value ?
      <RoundContentContainer>
        <RoundContainer value
          color={this.props.color}/>
        <ValueText>{this.props.value}</ValueText>
        <TitleText>{this.props.text}</TitleText>
        </RoundContentContainer>
        :
      <RoundContentContainer>
        <RoundContainer color={this.props.color}/>
        <TitleText>{this.props.text}</TitleText>
        </RoundContentContainer>
    )
  }
}

export default RowComponent;
