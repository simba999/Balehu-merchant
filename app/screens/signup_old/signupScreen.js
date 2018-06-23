import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  HeadingText,
  TextFieldContainer,
  ButtonContianer,
  ContentContainer,
HeadingTextContainer } from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';
import Card from '../../components/giftCardPopup/giftCard'

  class SignupScreen extends React.Component {
    static navigationOptions = {
      headerVisible:false,
      headerStyle:{
        width:0,
        height:0,
      },
    }
    render () {
      return(
        <View style={{flex:1}}>
          <ContentContainer>
          <TextFieldContainer>
            <TextInput
              label={'First Name'}
              width={260} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              label={'Last Name'}
              width={260} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              label={'Email Address'}
              width={260} />
          </TextFieldContainer>
          <ButtonContianer>
            <CustomButton
              onPress={()=>{
                this.props.setModalVisible(true,'Create a Wallet');
              }}
              fill={Theme.colors.lightBlue}
              width="260"
              text="Next"/>
          </ButtonContianer>
          </ContentContainer>
        </View>
      )
    }
  }

  export default SignupScreen ;
