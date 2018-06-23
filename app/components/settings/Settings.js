import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal
} from 'react-native'
import Theme from '../../../theme';
import { MainSettingContainer,
  TextFieldContainer,
  ButtonContianer,
  ContentContainer,
  LogoutButtonContianer,
  IconContainer,

} from './style';
import CustomIcon from '../icon/svgicon';
import TextInput from '../textfield/CustomTextField';
import CustomButton from '../button/CustomButton';
import BusinessInformation from './BusinessInformation';
import ContactInformation from './ContactInformation';
import ForgetPasswordScreen from '../../screens/forgotpassword/ForgotPasswordScreen';
import Card from '../giftCardPopup/giftCard';
class SettingComponent extends React.Component {
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
      <ScrollView style={{marginTop:5}}>
        <MainSettingContainer>
          <BusinessInformation title={"Business Information"}/>
          <ContactInformation  title={"Contact Information"} setModalVisible={this.setModalVisible}/>
          <LogoutButtonContianer>
            <CustomButton
              fill='#e63d30'
              width="260"
              text="Log Out"/>
          </LogoutButtonContianer>
        </MainSettingContainer>
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
                this.state.modalName=='Change Password'?
                <ForgetPasswordScreen  navigation={this.props.navigation} setModalVisible={this.setModalVisible}/>
                :
                null
              }
            </Card>
          </ScrollView>
        </View>
      </Modal>
      </ScrollView>
    )
  }
}

export default SettingComponent;
