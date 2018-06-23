import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  ButtonContianer,
  RowContainer,
  TitleText,
  PriceText,
  DetailContainer,
} from './style.js';
import CustomButton from '../button/CustomButton';
class RedeemComponent extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {
    return(
      <MainContainer>
        <RowContainer>
          <DetailContainer>
            <TitleText>Ink Coffee</TitleText>
            <PriceText>$ 20.90 </PriceText>
          </DetailContainer>
          <ButtonContianer>
            <CustomButton
              onPress={this.props.onPress}
              border={this.props.color}
              width="120"
              text="Redeem"/>
          </ButtonContianer>
        </RowContainer>
      </MainContainer>
    )
  }
}

export default RedeemComponent;
