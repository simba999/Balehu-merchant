import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, Dimensions,ImageBackground } from "react-native";

import TextInput from "../textfield/CustomTextField";
import CustomButtom from "../button/CustomButton";
import CustomIcon from '../icon/svgicon'
import Swiper from 'react-native-swiper';
import Theme from "../../../theme";
import { ImageTextContainer, ImageText, DescriptionText, DetailContainer, PromotionsText ,PromotionsDetailsText, PromotionCardContainer } from './style'

class PromotionCard extends React.Component {
  render(){
    return(
      <View>
      <PromotionCardContainer>
          <ImageBackground
              source={require('../../../assets/images/layer-1.png')}
              style={{ height: 100, position: "relative", width: "100%",marginTop:20 }}
          />
        <PromotionsText>{this.props.data.title}</PromotionsText>
        <PromotionsDetailsText>
          {this.props.data.desc}
        </PromotionsDetailsText>
        <View style={{marginTop:10}}>
        <CustomButtom
          fill={Theme.colors.lightBlue}
          width={250}
          text={"Add Promotion"}
        />
        </View>
      </PromotionCardContainer>
      </View>
    );
  }
}
export default PromotionCard;
