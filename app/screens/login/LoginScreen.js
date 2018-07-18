import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  HeadingText,
  TextFieldContainer,
  ForgotText,
  ForgotTextContainer,
  ButtonContianer,
  ContentContainer } from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';
import { app_login, user_login } from '../../actions/auth';
import { startTimer } from '../../actions/cron_job';
import { refresh_token_interval } from '../../actions/types';

import { connect } from "react-redux";
import { login } from "./action";
import { bindActionCreators } from "redux";
import { StackActions, NavigationActions } from 'react-navigation';


class LoginScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  constructor() {
    super()

    this.state = {
      username: 'simba912@mail.com',
      password: 'Kingsimba126!@',
      errMsg: ''
    }
  }

  handleSubmit = () =>{
    const self = this;

    self.props.setModalVisible(false);
    self.props.navigation.navigate('Main');


    if (this.state.username != '' && this.state.password != '') {
      this.props.login(this.state).then((res) => {
        if (res.code === 200) {
          self.props.setModalVisible(false);
          self.props.navigation.navigate('Main');
        } else {
          alert(res.message)
        }
      })
      // NavigationActions.navigate({ routeName: 'Main' })
    } else {
      this.setState({ errMsg: 'Input Field must be filled' })
    }
  }

  render () {
    let errMsg = this.state.errMsg

    if (this.props.error) {
      errMsg = this.props.errMsg
    }

    return(
      <View style={{flex:1}}>
        <ContentContainer>
        <Text style={{ 'color': 'red'}}>{ errMsg }</Text>
        <TextFieldContainer>
          <TextInput
            label={'Email Address'}
            value={this.state.username}
            onChangeText={(e) => this.setState({username: e})}
            width={260} />
        </TextFieldContainer>
        <TextFieldContainer>
          <TextInput
            label={'Password'}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(e) => this.setState({password: e})}
            width={260} />
        </TextFieldContainer>
        <ForgotTextContainer onPress={()=>{
          this.props.setModalVisible(true,'Recover Password');
          }}>
          <ForgotText> Forgot Password? </ForgotText>
        </ForgotTextContainer>
        <ButtonContianer>
          <CustomButton
            onPress={this.handleSubmit}
            fill={Theme.colors.lightBlue}
            width="260"
            text="Submit"/>
        </ButtonContianer>
        </ContentContainer>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return Object.assign(
      { dispatch: dispatch },
      bindActionCreators({
        login
      }, dispatch)
    );
  }

  const mapStateToProps = state => {
    let loginReducer = state.loginReducer
    return {
      error:loginReducer.error
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
