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
import { SendCoin } from '../../EthereumLib/utils';

class SendCoinPage extends React.Component {
    constructor(){
      super();

      this.state = {
        amount: 0,
        memo: ''
      }
    }
    static navigationOptions = {
      headerVisible:false,
      headerStyle:{
        width:0,
        height:0,
      },
    }

    _sendcoin() {
      console.log(this.state)
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
              }}/>
          <SubContainer>
            <LabelContainer>
              <LabelText>$.01 usd per coin </LabelText>
            </LabelContainer>
            <TextInput
              label={"Amount"}
              value={this.state.amount}
              onChange={(e) => this.setState({amount: e})}
              width={260}
              placeholder="0.00 USD"/>
          </SubContainer>
          <SubContainer>
            <TextInput
              label={"Memo"}
              value={this.state.memo}
              onChange={(e) => this.setState({memo: e})}
              width={260}
              placeholder="Add note"  />
          </SubContainer>
          <ButtonContainer>
            <CustomButton
              onPress={()=>{
                this._sendcoin()
              }}
              fill={Theme.colors.green}
              width={260}
              text={"Send"}/>
          </ButtonContainer>
        </MainContainer>
      );
    }
  }
export default SendCoinPage
