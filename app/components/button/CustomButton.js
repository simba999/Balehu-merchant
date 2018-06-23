import React from 'react'
import PropTypes from 'prop-types'
import {
        TouchableOpacity,
        Text,
} from 'react-native'
import styled from "styled-components/native";
import Theme from '../../../theme';

const ButtonBackground = styled.TouchableOpacity`
    background-color:${props => props.fill ? props.fill : 'transparent'};
    width:${props => props.width}px;
    height:${props => props.height ? `${props.height}px` : '50px'};
    border-radius:25px;
    justify-content:center;
    align-items:center;
    border:${props => props.border ? `2px solid  ${props.border}` : '0px'};
`;

const ButtonText = styled.Text`
    color:${props => props.textColor ? props.textColor : props.border ? props.border : Theme.colors.white};
    font-family:${props=> Theme.fontFamily.bold};
    font-size:${props=> props.fontSize ? props.fontSize : Theme.fontSize.medium};
`;
class CustomButton  extends React.Component {
  render () {
    console.log(this.props.onPress);
    return(
      <ButtonBackground
       fill={this.props.fill}
        border={this.props.border}
        width={this.props.width}
        height={this.props.height}
        onPress={this.props.onPress}>
          <ButtonText fontSize={this.props.fontSize} textColor={this.props.textColor} border={this.props.border}>{this.props.text}</ButtonText>
      </ButtonBackground>
    )
  }
}

export default CustomButton ;
