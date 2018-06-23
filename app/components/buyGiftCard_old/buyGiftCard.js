import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, Dimensions } from "react-native";

import TextInput from "../textfield/CustomTextField";
import CustomButton from "../button/CustomButton";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import Theme from "../../../theme";
let { height, width } = Dimensions.get("window");
import styled from "styled-components/native";
import { LabelText, SearchContainer, ButtonContianer,TextLabelContainer,TextLabel} from './style.js'

var radio_props = [
  { label: "Myself", value: 0 },
  { label: "Someone else", value: 1 }
];



class BuyGiftCard extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      selectedOption: 0
    };
  }
  handleRadioClick = e => {
    this.setState({
      selectedOption: e
    });
  };
  render() {
    return (
      <View>
        <View>
          <TextInput
            label={"Amount"}
            width={width - 90}
            placeholder="0.00 USD"
          />
        </View>
        <View>
          <LabelText
            style={{
              fontFamily: Theme.fontFamily.bold,
              marginTop: 20,
              marginBottom: 10
            }}
          >
            For
          </LabelText>
          <RadioForm animation={false} style={{ alignItems: "flex-start" }}>
            {radio_props.map((obj, i) => {
              return (
                <RadioButton key={i}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.selectedOption === i}
                    onPress={this.handleRadioClick}
                    borderWidth={1}
                    buttonSize={5}
                    buttonOuterSize={15}
                    buttonStyle={{ borderWidth: 1 }}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    onPress={this.handleRadioClick}
                    labelStyle={{
                      fontSize: Theme.fontSize.midregular,
                      fontFamily: Theme.fontFamily.regular,
                      color: Theme.colors.darkGray,
                      marginLeft: 10
                    }}
                  />
                </RadioButton>
              );
            })}
          </RadioForm>
        </View>
        <TextLabelContainer>
          <TextLabel>Search person</TextLabel>
        </TextLabelContainer>
        <SearchContainer>
          <View>
            <TextInput
              width={130}
              placeholder="Enter email"
            />
          </View>
          <View>
            <LabelText>
              Or
            </LabelText>
          </View>
          <View style={{marginTop:10}}>
              <CustomButton
                border={Theme.colors.lightBlue}
                width="100"
                text={"Scan Code"}
              />
          </View>
        </SearchContainer>
        <ButtonContianer>
          <CustomButton
            fill={Theme.colors.lightBlue}
            width={width - 80}
            text={"Buy"}
          />
        </ButtonContianer>
      </View>
    );
  }
}

export default BuyGiftCard;
