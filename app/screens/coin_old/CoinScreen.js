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
import QRCode from 'react-native-qrcode';

class CoinTabScreen extends React.Component {
  constructor(){
    super();
    this.state={
      address:'2193/jamaplur,ahmedabad-380001'
    }
  }
  render(){
    return(
      <CoinsContainer>
        {
          this.props.screen ?
            null:
          <LabelText primary text>Request Balehu Coins</LabelText>
        }
      {
          !this.props.screen ?
          <AmountContainer>
            <LabelContainer>
              <LabelText>$.01 usd per coin </LabelText>
            </LabelContainer>
            <TextInput
              label={"Amount"}
              width={260}
              placeholder="0.00 BAL 0 USD"
            />
        </AmountContainer>
        :
        null
      }
        <SubContainer receiveCoin>
          <LabelText primary text>Public Address</LabelText>
          <QrCodeContainer>
            <QRCode
             value={this.state.address}
             size={200}
            />
          </QrCodeContainer>

        <ButtonContainer>
          <CustomButton
            border={Theme.colors.violet}
            width={260}
            text={this.props.screen ? "Send Key via Email":"Request via Email"}
          />
        </ButtonContainer>

        <ButtonContainer>
          <CustomButton
            border={Theme.colors.violet}
            width={260}
            text={this.props.screen ? "Send Key via SMS":"Request via SMS"}
          />
        </ButtonContainer>

        </SubContainer>
      </CoinsContainer>
    );
  }
}

export default CoinTabScreen
