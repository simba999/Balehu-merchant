import React from 'react'
import PropTypes from 'prop-types'
import {
        TouchableOpacity,
        Text,
        View,
        TextInput,
} from 'react-native'
import styled from "styled-components/native";
import Theme from '../../../theme';

const LabelText = styled.Text`
    color:${props => Theme.colors.darkGray};
    font-family:${props=> Theme.fontFamily.bold};
    font-size:${props=> Theme.fontSize.normal};
`;
const StyledTextInput = styled.TextInput`
    background-color:${props => Theme.colors.inputBackgroundColor};
    width:${props => props.width}px;
    height:50px;
    padding-left:15px;
    margin-top:10px;
`;
class CustomTextField extends React.Component {
  render () {
    return(
      <View>
        <LabelText>{this.props.label}</LabelText>
          <StyledTextInput
            width={this.props.width }
            underlineColorAndroid="transparent"
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            editable={this.props.editable ?  this.props.editable : true}
        />
      </View>
    )
  }
}

export default CustomTextField;
