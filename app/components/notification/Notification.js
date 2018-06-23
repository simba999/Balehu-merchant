import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer} from './style';
import TextInput from '../textfield/CustomTextField';
import CustomButton from '../button/CustomButton';
import NotificationRow from './NotificationRow';

class Notification extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {
    return(
      <ScrollView>
        <MainContainer>
          <NotificationRow handleIndexChange={this.props.handleIndexChange} navigation={this.props.navigation} DateText={'17 May, 2018 - 1:34 pm'} balance={'50'} username={'John Doe'} setModalVisible={this.props.setModalVisible}/>
          <NotificationRow handleIndexChange={this.props.handleIndexChange} navigation={this.props.navigation} DateText={'17 May, 2018 - 1:34 pm'} balance={'50'} username={'John Doe'} setModalVisible={this.props.setModalVisible}/>
          <NotificationRow handleIndexChange={this.props.handleIndexChange} navigation={this.props.navigation} DateText={'17 May, 2018 - 1:34 pm'} balance={'50'} username={'John Doe'} setModalVisible={this.props.setModalVisible}/>
          <NotificationRow handleIndexChange={this.props.handleIndexChange} navigation={this.props.navigation} DateText={'17 May, 2018 - 1:34 pm'} balance={'50'} username={'John Doe'} setModalVisible={this.props.setModalVisible}/>
        </MainContainer>
      </ScrollView>
    )
  }
}

export default Notification;
