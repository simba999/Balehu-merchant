import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, Dimensions,ImageBackground,ScrollView } from "react-native";

import TextInput from "../textfield/CustomTextField";
import CustomButtom from "../button/CustomButton";
import CustomIcon from '../icon/svgicon'
import Swiper from 'react-native-swiper';
import Theme from "../../../theme";
import PromotionCard from "./promotions"
import { MainContainer, CompanyDetailContainer, IconContainer, ButtonContainer, ImageTextContainer, ImageText, DescriptionText, DetailContainer, DescriptionContainer, PromotionTitle ,PromotionsContainer} from './style'
let { height, width } = Dimensions.get("window");

const data = [
  {
    title:'Friday Salad Specials!',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  },
  {
    title:'Saturday Salad Specials!',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  }
]

class CompanyDetail extends React.Component {
  render(){
    return(
      <ScrollView>
      <MainContainer>
      <ImageBackground
          source={require('../../../assets/images/layer-1.png')}
          resizeMode="cover"
          style={{ height: 200, position: "relative",width:500}}
          >
          <ImageTextContainer>
            <ImageText>The French Cuisine</ImageText>
          </ImageTextContainer>
        </ImageBackground>
        <CompanyDetailContainer>
        <DescriptionContainer>
          <DescriptionText detail>French breakfast and dinner, a family place Lorem ipsum dolor sit amet, consecurte</DescriptionText>
          <IconContainer>
            <DetailContainer>
                  <CustomIcon
                  name="location"
                  height="16"
                  width="16"
                  />
                <DescriptionText>123 6th St.{`\n`}Melbone,Florida 32904</DescriptionText>
            </DetailContainer>
          <DetailContainer>
              <CustomIcon
              name="call"
              height="14"
              width="14"
              />
              <DescriptionText>123-45-67-89</DescriptionText>
          </DetailContainer>
          <DetailContainer>
              <CustomIcon
              name="clock"
              height="14"
              width="14"
              />
              <DescriptionText>8:00 am to 10:00 pm</DescriptionText>
          </DetailContainer>
          <ButtonContainer>
            <CustomButtom
              onPress={()=>{
                this.props.setModalVisible(true,'Buy Gift Card');
              }}
              border={Theme.colors.lightBlue}
              width={250}
              text={"Buy Gift Card"}
            />
          </ButtonContainer>
        </IconContainer>
      </DescriptionContainer>
      </CompanyDetailContainer>
      <PromotionsContainer>
        <PromotionTitle>Promotions</PromotionTitle>
        {
          data.map(e => {
            return <PromotionCard data={e}/>
          })
        }
      </PromotionsContainer>
    </MainContainer>
    </ScrollView>
    );
  }
}
export default CompanyDetail;
