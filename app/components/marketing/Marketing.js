import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  ContentContainer,
  CardContainer,
  TitleContainer,
  ButtonContainer,
  TitleText,
  IconContainer,
  InnerButtonContainer,
  AnalyticContainer
} from './style';
import CustomButton from '../button/CustomButton';
import Analytics from '../analytics/Analytics'
import Card from '../giftCardPopup/giftCard'
import LoyaltyReward from '../../screens/loyalty/LoyaltyReward';
import CustomIcon from '../icon/svgicon';
class Marketing extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  constructor(){
    super();
    this.state = {
      modalVisible: false,
      modalName:''
    }
  }

  setModalVisible = (visible,modal) => {
    this.setState({modalVisible: visible,modalName:modal});
  }
  render () {
    return(
      <ScrollView contentContainerStyle={{paddingBottom:20,alignItems:'center',justifyContent:'center'}}>
        <CardContainer>
          <TitleContainer>
            <TitleText>Promotions</TitleText>
          </TitleContainer>
          <ButtonContainer>
            <InnerButtonContainer>
            <CustomButton
              fill={Theme.colors.lightBlue}
              width="146"
              text={"New Promotion"}
              onPress={() => {this.props.navigation.navigate('Promotion')}} />
            </InnerButtonContainer>
            <InnerButtonContainer>
          <CustomButton
              border={Theme.colors.lightBlue}
              width="140"
              text={"My Promotions"}
              onPress={() => {this.props.navigation.navigate('MyPromotion')}} />
            </InnerButtonContainer>
          </ButtonContainer>
        </CardContainer>

        <CardContainer>
          <TitleContainer>
            <TitleText>Loyalty Rewards</TitleText>
          </TitleContainer>
          <ButtonContainer>
            <InnerButtonContainer>
            <CustomButton
              fill={Theme.colors.violet}
              width="143"
              text={"New Reward"}
              onPress={() => {
                this.setModalVisible(true,'Loyalty Reward');
              }}/>
            </InnerButtonContainer>
            <InnerButtonContainer>
              <CustomButton
                border={Theme.colors.violet}
                width="142"
                text={"My Rewards"}
                onPress={() => {this.props.navigation.navigate('MyReward')}} />
              </InnerButtonContainer>
              </ButtonContainer>
            </CardContainer>
            <Analytics
              title={'Analytics'}
              subtitle={'The French Cuisine'}
              reachColor={'rgba(230,61,48,0.7)'}
              engageColor={'rgba(230,61,48,0.3)'}
              redeemColor={'rgb(0,150,136)'}
              navigation={this.props.navigation} />
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
                      :
                      null
                    }
                  </Card>
                </ScrollView>
              </View>
            </Modal>
          </ScrollView>
        )
      }
    }

    export default Marketing;
