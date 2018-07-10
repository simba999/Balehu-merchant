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
  ButtonContianer,
  ContentContainer,
HeadingTextContainer } from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';
import { changeSignupStatus, app_login } from '../../actions/auth';
import { userSignUp } from './action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SignupScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  constructor() {
    super();

    this.state = {
      first_name: 'king12',
      second_name: 'simba',
      email: 'simba126@mail.com',
      password: 'Kingsimba126!@',
      confirm_password: 'Kingsimba126!@'
    }

    this._signup = this._signup.bind(this);
  }

  _signup() {
    const self = this;
    // this.props.setModalVisible(true,'Business Information');

    if (
      this.state.first_name === '' ||
      this.state.second_name === '' ||
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.confirm_password === ''
    ) {
      alert('You must be filled!')
    } else {
      const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const passRe = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
      console.log(re, passRe)
      if (re.test(this.state.email)) {
        if (this.state.password !== this.state.confirm_password) {
          this.setState({ errMsg: 'Password is not correct' })
        } else {
          if (passRe.test(this.state.password)) {
            const params = {
              name: this.state.first_name + ' ' + this.state.second_name,
              email: this.state.email,
              password: this.state.password
            }

            this.props.userSignUp(params).then((res) => {
              console.log(res)
              if (res.code === 200) {
                self.props.setModalVisible(true, 'Business Information');
              } else {
                alert(res.message);
              }
              
            })

            
          } else {
            alert('Password must be 8 characters long with at  least 1 upper chase character, 1 lower case character, and one numeric character.')
            // this.setState({ errMsg: 'Password must be 8 characters long with at  least 1 upper chase character, 1 lower case character, and one numeric character.' })
          }
          
        }
      } else {
        alert('email invalid')
        // this.setState({ errMsg: 'Email is invalid' })
      }
    }
  }

  render () {
    let errMsg = this.state.errMsg

    if (this.props.error) {
      errMsg = this.props.errMsg
    }

    return(
      <View style={{flex:1}}>
        <Text style={{ 'color': 'red' }}>{errMsg}</Text>
        <ContentContainer>
        <TextFieldContainer>
          <TextInput
            label={'First Name'}
            value={this.state.first_name}
            onChangeText={(e) => this.setState({first_name: e})}
            width={260} />
        </TextFieldContainer>
        <TextFieldContainer>
          <TextInput
            label={'Last Name'}
            value={this.state.second_name}
            onChangeText={(e) => this.setState({second_name: e})}
            width={260} />
        </TextFieldContainer>
        <TextFieldContainer>
          <TextInput
            label={'Email Address'}
            value={this.state.email}
            onChangeText={(e) => this.setState({email: e})}
            width={260} />
        </TextFieldContainer>
        <TextFieldContainer>
          <TextInput
            label={'Password'}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={(e) => this.setState({password: e})}
            width={260} />
        </TextFieldContainer>
        <TextFieldContainer>
          <TextInput
            label={'Confirm Password'}
            secureTextEntry={true}
            value={this.state.confirm_password}
            onChangeText={(e) => this.setState({confirm_password: e})}
            width={260} />
        </TextFieldContainer>
        <ButtonContianer>
          <CustomButton
            onPress={()=>{
              this._signup()
            }}
            fill={Theme.colors.lightBlue}
            width="260"
            text="Next"/>
        </ButtonContianer>
        </ContentContainer>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators({userSignUp}, dispatch)
  );
}

const mapStateToProps = state => {
  let signUpReducer = state.signUpReducer
  return {
    error : signUpReducer.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
