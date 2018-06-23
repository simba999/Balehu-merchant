import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer, SubContainer, ButtonContainer, LabelContainer, LabelText} from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';

class SendCoin extends React.Component {
    constructor(){
      super();
    }
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
          <LabelText primary text>To</LabelText>
            <CustomButton
              fill={Theme.colors.green}
              width={137}
              text={"Scan Code"}
              onPress={() => {
                this.props.setModalVisible(true,'Scan QR code');
              }}
            />
          <SubContainer>
            <LabelContainer>
              <LabelText>$.01 usd per coin </LabelText>
            </LabelContainer>
            <TextInput
              label={"Amount"}
              width={260}
              placeholder="0.00 USD"
            />
          </SubContainer>
          <SubContainer>
            <TextInput
              label={"Memo"}
              width={260}
              placeholder="Add note"
            />
          </SubContainer>
          <ButtonContainer>
            <CustomButton
              onPress={()=>{
                this.props.setModalVisible(true,'Transfer Notification');
              }}
              fill={Theme.colors.green}
              width={260}
              text={"Send"}
            />
          </ButtonContainer>
        </MainContainer>
      );
    }
  }
export default SendCoin
