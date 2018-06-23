import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  ButtonContianer,
  ContentContainer,
  DetailText,
  TextInputContainer} from './style';
  import TextInput from '../../components/textfield/CustomTextField';
  import CustomButton from '../../components/button/CustomButton';

class ForgetPasswordScreen extends React.Component {
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
          <TextInputContainer>
          <TextInput
          label="Current Password"
          width="260" />
          </TextInputContainer>
          <TextInputContainer>
          <TextInput
          label="New Password"
          width="260" />
          </TextInputContainer>
          <TextInputContainer>
          <TextInput
          label="Confrim Password"
          width="260" />
          </TextInputContainer>
          <ButtonContianer>
            <CustomButton
              fill={Theme.colors.lightBlue}
              width="260"
              text="Submit"/>
          </ButtonContianer>
        </ContentContainer>
        </View>
    )
  }
}

export default ForgetPasswordScreen ;
