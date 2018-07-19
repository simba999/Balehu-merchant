import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  AsyncStorage
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer, SubContainer, ButtonContainer, LabelContainer, LabelText} from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';
import { SendCoin } from '../../EthereumLib/utils';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


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

    async _sendcoin() {
      let privateKey = await AsyncStorage.getItem('privateKey')
      let walletAddress = await AsyncStorage.getItem('walletAddress')

      const fromAddress = '0xCAAa9Bf99E72039D45600a220D523936bdc57c91';
      const balehuAddress = '0xF8Bf9570682A1349141D6c15dAA797E03152D4C0';
      const amount = parseFloat(this.state.amount) * 1000000;

      await SendCoin(fromAddress, walletAddress, amount, this.props.userToken.token, this.props.userInfo.password, balehuAddress);
      this.props.setModalVisible(true,'Transfer Notification');
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

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators({}, dispatch)
  );
}

const mapStateToProps = state => {
  let loginReducer = state.loginReducer
  let commonReducer = state.commonReducer

  return {
    error:loginReducer.error,
    userToken: commonReducer.userToken,
    userInfo: commonReducer.userinfo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendCoinPage);
