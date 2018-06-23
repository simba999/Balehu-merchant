import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, Dimensions,Modal,ScrollView } from "react-native";
import TextInput from "../textfield/CustomTextField";
import CustomButtom from "../button/CustomButton";
import { MainContainer,
  CardContainer,
  Container,
  SubContainer,
  TitleText,
  CoinInfoText,
  CoinText,
  PriceText,
  SendButtonContainer,
  TransactionButton,
  ButtonContainer,IconContainer } from "./style";
  import CustomIcon from '../icon/svgicon'
  import Card from '../../components/giftCardPopup/giftCard';
  import SendCoin from '../../screens/coin/sendCoin';
  import CoinScreen from '../../screens/coin/CoinScreen';
  import TransactionHistory from '../../screens/history/TranscationHistory.js';
  import QrCodeScan from '../qrCodeScan/qrCode';

  import Theme from "../../../theme";

  class Wallet extends React.Component {
    constructor(){
      super();
      this.state = {
        modalVisible: false,
        modalName:''
      }
    }
    setModalVisible = (visible,modal) => {
      this.setState({modalVisible: visible,modalName:modal});
    }
    render(){
      return(
        <MainContainer>
          <CardContainer>
            <Container primary>
              <TitleText>Balehu Coins</TitleText>
              <CoinInfoText>1 coin = $2.65 usd</CoinInfoText>
            </Container>
            <SubContainer>
              <CoinText>64.00</CoinText>
              <PriceText>$24.08 USD </PriceText>
            </SubContainer>
            <SendButtonContainer>
              <CustomButtom
                onPress={() => {
                  this.setModalVisible(true,'Send Coins');
                }}
                fill={Theme.colors.green}
                width={290}
                text={"Send Coins"}
                />
            </SendButtonContainer>
            <ButtonContainer>
              <CustomButtom
                onPress={() => {
                  this.setModalVisible(true,'Receive Coins');
                }}
                fill={Theme.colors.violet}
                width={290}
                text={"Receive Coins"}
                />
            </ButtonContainer>
            <ButtonContainer>
              <CustomButtom
                onPress={() => {
                  this.setModalVisible(true,'Request Coins');
                }}
                border={Theme.colors.violet}
                width={290}
                text={"Request Coins"}
                />
            </ButtonContainer>
          </CardContainer>
          <CardContainer>
            <TitleText>Transaction History </TitleText>
            <TransactionButton>
              <CustomButtom
                onPress={() => {
                  this.setModalVisible(true,'Transaction History');
                }}
                border={Theme.colors.warmGrey}
                width={290}
                text={"View History"}
                />
            </TransactionButton>
          </CardContainer>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
              <IconContainer onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <CustomIcon
                  name="cross"
                  fill='#000000'
                  height="15"
                  width="15"
                  />
              </IconContainer>
              <ScrollView>
                <Card title={this.state.modalName}>
                  {
                    this.state.modalName=='Send Coins'?
                    <SendCoin  setModalVisible={this.setModalVisible}/>
                    : this.state.modalName=='Receive Coins'?
                    <CoinScreen screen={'request'}  setModalVisible={this.setModalVisible}/>
                    : this.state.modalName=='Transaction History'?
                    <TransactionHistory  setModalVisible={this.setModalVisible}/>
                    : this.state.modalName=='Scan QR code'?
                    <QrCodeScan setModalVisible={this.setModalVisible} />
                    : <CoinScreen setModalVisible={this.setModalVisible}/>

                }
              </Card>
            </ScrollView>
          </View>
        </Modal>
      </MainContainer>
    );
  }
}
export default Wallet;
