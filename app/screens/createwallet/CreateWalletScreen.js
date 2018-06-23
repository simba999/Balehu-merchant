import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  HeadingText,
  ButtonContianer,
  ContentContainer,
  HeadingTextContainer,
  DetailText,
  BackupText,
  KeyText,
  TextContainar} from './style';
  import TextInput from '../../components/textfield/CustomTextField';
  import CustomButton from '../../components/button/CustomButton';
  import Card from '../../components/giftCardPopup/giftCard'

  class CreateWalletScreen extends React.Component {
    static navigationOptions = {
      headerVisible:false,
      headerStyle:{
        width:0,
        height:0,
      },
    }
    handleClick = () =>{
       this.props.setModalVisible(false);
      this.props.navigation.navigate('Main');
    }

    render () {
      return(
        <View style={{flex:1}}>
          <ContentContainer>
            <DetailText>Write down the backup words and store in a safe place. This is the only way to restore your Balehu Wallet if your phone is lost, stolen or upgraded.</DetailText>
            <BackupText>Write down backup phrase:</BackupText>
            <KeyText>1BoatSLRHtKNngkdXEeobR76b53LETt</KeyText>
          </ContentContainer>
          <ButtonContianer>
            <CustomButton
              fill={Theme.colors.lightBlue}
              width="260"
              text="Get Started"
              onPress={this.handleClick}/>
          </ButtonContianer>
      </View>
      )
    }
  }

  export default CreateWalletScreen ;
