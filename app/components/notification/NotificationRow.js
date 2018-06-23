import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native'
import Theme from '../../../theme';
import {
  ContentContainer,
  CardContainer,
  TitleContainer,
  SendContainer,
  UserContainer,
  ButtonContainer,
  DateText,
  UserText,
  TitleText,
  SendText,
  TextContainer,
  IconContainer
} from './style';
import CustomButton from '../button/CustomButton';
import TransferNotification from '../../screens/transferNotification/transferNotification';
import CustomIcon from '../icon/svgicon'
import Card from '../giftCardPopup/giftCard';

class Notification extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
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
  render () {
    return(
      <ContentContainer>
        <CardContainer>
          <TitleContainer>
            <TextContainer>
              <TitleText>Coins Transfer</TitleText>
            </TextContainer>
            <TextContainer>
              <DateText>{this.props.DateText}</DateText>
            </TextContainer>
          </TitleContainer>
          <SendContainer>
            <TextContainer>
              <SendText>Send Coins</SendText>
            </TextContainer>
            <TextContainer>
              <SendText>To</SendText></TextContainer>
            </SendContainer>
            <UserContainer>
              <TextContainer>
                <UserText>{this.props.balance} BAL</UserText>
              </TextContainer>
              <TextContainer>
                <UserText>{this.props.username}</UserText>
              </TextContainer>
            </UserContainer>
            <ButtonContainer>
              <CustomButton
                onPress={()=>{
                  this.setModalVisible(true,'Transfer Notification');
                }}
                border={Theme.colors.lightBlue}
                width={280}
                text={"View"}  />
            </ButtonContainer>
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
                  this.state.modalName=='Transfer Notification'?
                    <TransferNotification handleIndexChange={this.props.handleIndexChange} navigation={this.props.navigation} setModalVisible={this.setModalVisible} />
                  : null
              }
              </Card>
            </ScrollView>
          </View>
        </Modal>
        </ContentContainer>
      )
    }
  }

  export default Notification;
