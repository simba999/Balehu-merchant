import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';
import Card from '../../components/giftCardPopup/giftCard'
import { MainContainer, Container, SubContainer, ButtonContainer, DescText, DateText, TitleText } from './style';

class TransferNotification extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  handleClick = () =>{
     this.props.setModalVisible(false);
  }
  render(){
    return(
      <MainContainer>
          <DescText>Please confirm you are trying to perform the following transaction:</DescText>
          <DateText>17 May, 2018 - 1:34 pm</DateText>
        <Container>
          <SubContainer>
            <TitleText>Send Coins</TitleText>
          </SubContainer>
          <SubContainer>
            <TitleText>To</TitleText>
          </SubContainer>
        </Container>
        <Container>
          <SubContainer amount>
            <TitleText price>50 BAL</TitleText>
          </SubContainer>
          <SubContainer amount>
            <TitleText price>John Doe</TitleText>
          </SubContainer>
        </Container>
          <DescText price>132.5 USD</DescText>
          <Container buttons>
        <ButtonContainer>
          <CustomButton
            onPress={this.handleClick}
            fill={'#eeeeee'}
            width="260"
            textColor={'#9e9e9e'}
            text="Cancel Transaction"
          />
          </ButtonContainer>
          <ButtonContainer>
          <CustomButton
            fill={Theme.colors.lightBlue}
            width="260"
            text="Complete Transaction"
          />
        </ButtonContainer>
        </Container>
      </MainContainer>
    );
  }
}
export default TransferNotification
