import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,Modal,
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  CardContainer,
  TitleText,
  PromotionTitle,
  TabContainer,
  RowContainer,
  ContentContainer,
  ContentText,
  InnerContainer,
  RewardText,
  IconContainer
} from './style';
import CustomButton from '../../components/button/CustomButton';
let { height, width } = Dimensions.get("window");
import HeaderRightIcon from '../../components/header/HeaderRightIcon';
import HeaderLeftIcon from '../../components/header/HeaderLeftIcon';
import LoyaltyReward from '../loyalty/LoyaltyReward';
import CustomIcon from '../../components/icon/svgicon';
import Card from '../../components/giftCardPopup/giftCard';


class MyReward extends React.Component {
  constructor(){
    super();
    this.state = {
     modalVisible: false,
     modalName:''
   }
  }

  static navigationOptions = (navigation) => ({
    headerTitle:(<View/>),
    headerLeft: (<HeaderLeftIcon icon={'left-arrow'} {...navigation}/>),
    headerRight: (<View/>),
  })
  setModalVisible = (visible,modal) => {
    this.setState({modalVisible: visible,modalName:modal});
  }
  render () {
    return(
      <MainContainer>
        <CardContainer>
          <PromotionTitle>
              <TitleText>My Rewards</TitleText>
          </PromotionTitle>
          <ContentContainer>
            <RowContainer>
              <RewardText>Reward 1</RewardText>
                <CustomButton
                  border={"#e0e0e0"}
                  textColor={"#757575"}
                  fontSize={Theme.fontSize.small}
                  width="115"
                  height="33"
                  text="Edit"
                  onPress={() => {
                    this.setModalVisible(true,'Loyalty Reward');
                  }}
                  />
              </RowContainer>
              <InnerContainer>
              <ContentText>For $1000 USD spent</ContentText>
                <ContentText>Reward with 100 Balehu Coins</ContentText>
                </InnerContainer>
            </ContentContainer>
            <ContentContainer>
              <RowContainer>
                <RewardText>Reward 2</RewardText>
                  <CustomButton
                    border={"#e0e0e0"}
                    textColor={"#757575"}
                    fontSize={Theme.fontSize.small}
                    width="115"
                    height="33"
                    text="Edit"
                    onPress={() => {
                      this.setModalVisible(true,'Loyalty Reward');
                    }}
                    />
                </RowContainer>
                <InnerContainer>
                <ContentText>For 2 Margaritas bought</ContentText>
                  <ContentText>Reward with 1 free Margarita</ContentText>
                  </InnerContainer>
              </ContentContainer>
        </CardContainer>
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        >
        <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
          <IconContainer onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
            <CustomIcon
              name="cross"
              fill='#000000'
              height="15"
              width="15"
              />
          </IconContainer>
          <ScrollView>
            <Card title={this.state.modalName}>
              {
                this.state.modalName=='Loyalty Reward'?
                <LoyaltyReward  setModalVisible={this.setModalVisible}/>
                : null
            }
            </Card>
          </ScrollView>
        </View>
      </Modal>
        </MainContainer>
      )
    }
  }

  export default MyReward;
