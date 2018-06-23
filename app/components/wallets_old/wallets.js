import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, Dimensions,Modal,ScrollView } from "react-native";
import TextInput from "../textfield/CustomTextField";
import CustomButtom from "../button/CustomButton";
import { MainContainer, CardContainer, PromotionContainer, IconContainer, Container, SubContainer, TitleText, CoinInfoText, CoinText, PriceText } from "./style";
import CustomIcon from '../icon/svgicon'
import Theme from "../../../theme";
import Card from '../giftCardPopup/giftCard';
import SendCoin from '../../screens/coin/sendCoin';
import ReceiveCoin from '../../screens/coin/coinsTab';
import RedeemPromotion from '../../screens/redeempromotion/RedeemPromotion';
import GiftCardBalance from '../../screens/cardbalance/GiftCardBalance';
import CompanyCash from '../../screens/companyCash/CompanyCash';
import QrCodeScan from '../qrCodeScan/qrCode';
import TransferNotification from '../../screens/transferNotification/transferNotification';

class Wallets extends React.Component {
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
            <CoinInfoText>1 coin = $.01 usd</CoinInfoText>
          </Container>

          <SubContainer>
            <CoinText>0.00</CoinText>
            <PriceText>$.01 USD </PriceText>
          </SubContainer>

          <Container>
          <CustomButtom
            onPress={() => {
              this.setModalVisible(true,'Send Coins');
            }}
            fill={Theme.colors.green}
            width={137}
            text={"Send Coins"}
          />
          <CustomButtom
            onPress={() => {
              this.setModalVisible(true,'Receive Coins');
            }}
            fill={Theme.colors.violet}
            width={137}
            text={"Receive Coins"}
          />
          </Container>
        </CardContainer>

        <CardContainer>
        <TitleText>Balehu Promotions</TitleText>
          <PromotionContainer>
            <CustomButtom
              onPress={() => {
                this.setModalVisible(true,'Redeem Promotion');
              }}
              fill={Theme.colors.PromotionBlue}
              width={310}
              text={"Promotions"}
            />
          </PromotionContainer>
        </CardContainer>

        <CardContainer>
        <TitleText>Gift Cards</TitleText>
          <PromotionContainer>
            <CustomButtom
              onPress={() => {
                this.setModalVisible(true,'Gift Card Balnance');
              }}
              fill={Theme.colors.purple}
              width={310}
              text={"Merchant Cash"}
            />
          </PromotionContainer>
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
            <Card title={this.state.modalName=='Receive Coins'?'':this.state.modalName}>
              {
                this.state.modalName=='Send Coins'?
                <SendCoin  setModalVisible={this.setModalVisible}/>
                :this.state.modalName=='Receive Coins'?
                  <ReceiveCoin setModalVisible={this.setModalVisible}/>
                :this.state.modalName=='Redeem Promotion'?
                  <RedeemPromotion setModalVisible={this.setModalVisible} />
                :this.state.modalName=='Gift Card Balnance'?
                  <GiftCardBalance setModalVisible={this.setModalVisible} />
                : this.state.modalName=='Scan QR code'?
                  <QrCodeScan setModalVisible={this.setModalVisible} />
                :this.state.modalName=='Transfer Notification'?
                  <TransferNotification setModalVisible={this.setModalVisible} />
                :<CompanyCash navigation={this.props.navigation} setModalVisible={this.setModalVisible}/>
              }
            </Card>
          </ScrollView>
        </View>
      </Modal>
      </MainContainer>
    );
  }
}
export default Wallets;
