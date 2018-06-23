import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, Dimensions } from "react-native";

import TextInput from "../textfield/CustomTextField";
import { Container, TitleText, IconContainer } from "./style";
import CustomIcon from '../icon/svgicon'

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import Theme from "../../../theme";

let { height, width } = Dimensions.get("window");

class GiftCard extends React.Component {
  render() {
    return (
        <Container children={this.props.children}>
      {   this.props.title ?
            <TitleText>{this.props.title}</TitleText>
            : null
 }
          {this.props.children}
        </Container>
    );
  }
}

export default GiftCard;
