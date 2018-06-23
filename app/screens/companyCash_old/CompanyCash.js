import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer, SubContainer, ButtonContainer, CoinsContainer, AmountContainer, LabelContainer, QrCodeContainer, LabelText} from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';

class CompanyCash extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  render(){
    return(
      <MainContainer>
        <LabelText primary>Gift Card Balance</LabelText>
        <LabelText price>$10.90</LabelText>
        <TextInput
          label={"Amount"}
          width={260}
          placeholder="0.00 USD"
        />
        <ButtonContainer>
        <CustomButton
          fill={Theme.colors.purple}
          width={260}
          text={"Redeem"}
        />
        </ButtonContainer>
      </MainContainer>
    );
  }
}

export default CompanyCash;
