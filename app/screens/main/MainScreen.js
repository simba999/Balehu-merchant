import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {MainContainer,
  LogoContainer,
  ButtonContianer,
  WalletButtonContainer,
  MarketingButtonContainer,
  SalesButtonContainer,
  IconContainer,
  UserContainer} from './style';
  import CustomButton from '../../components/button/CustomButton';
  import CustomIcon from '../../components/icon/svgicon';
  class MainScreen extends React.Component {
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
      }
    }

    render () {
      return(
        <ImageBackground resizeMode="cover" source={require('../../../assets/images/background_img.jpg')} style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
          <LogoContainer>
          <CustomIcon name="logo"/>
          </LogoContainer>
          <ButtonContianer>
            <SalesButtonContainer>
              <CustomButton
                fill={Theme.colors.violet}
                width="310"
                text="Sales"
                onPress={() => {this.props.navigation.navigate('Marketing',{index:0})}}

                />
            </SalesButtonContainer>
            <MarketingButtonContainer>
              <CustomButton
                fill={Theme.colors.lightBlue}
                width="310"
                text="Marketing"
                onPress={() => {this.props.navigation.navigate('Marketing',{index:1})}}
                />
            </MarketingButtonContainer>
            <WalletButtonContainer>
              <CustomButton
                fill={Theme.colors.skyBlue}
                width="310"
                text="Wallet"
                onPress={() => {this.props.navigation.navigate('Marketing',{index:2})}}
                />
            </WalletButtonContainer>

          </ButtonContianer>
          <UserContainer>
            <IconContainer onPress={() => {this.props.navigation.navigate('Marketing',{index:3})}}>
              <CustomIcon name="user" height='20' width='20'/>
            </IconContainer>
          </UserContainer>
        </ImageBackground>
      )
    }
  }

  export default MainScreen;
