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
  TextFieldContainer,
  ForgotText,
  ForgotTextContainer,
  ButtonContianer,
  ContentContainer } from './style';
  import TextInput from '../../components/textfield/CustomTextField';
  import CustomButton from '../../components/button/CustomButton';
  class LoginScreen extends React.Component {
    static navigationOptions = {
      headerVisible:false,
      headerStyle:{
        width:0,
        height:0,
      },
    }
    handleSubmit = () =>{
      this.props.setModalVisible(false);
      this.props.navigation.navigate('Main');
    }
    render () {
      return(
        <View style={{flex:1}}>
          <ContentContainer>
          <TextFieldContainer>
            <TextInput
              label={'Email Address'}
              width={260} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              label={'Password'}
              width={260} />
          </TextFieldContainer>
          <ForgotTextContainer onPress={()=>{
            this.props.setModalVisible(true,'Recover Password');
            }}>
            <ForgotText> Forgot Password? </ForgotText>
          </ForgotTextContainer>
          <ButtonContianer>
            <CustomButton
              onPress={this.handleSubmit}
              fill={Theme.colors.lightBlue}
              width="260"
              text="Submit"/>
          </ButtonContianer>
          </ContentContainer>
        </View>
      )
    }
  }

  export default LoginScreen ;
