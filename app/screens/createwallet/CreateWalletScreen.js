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
  ButtonContianer,
  ContentContainer,
  HeadingTextContainer,
  DetailText,
  BackupText,
  KeyText,
  TextContainar} from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';
import Card from '../../components/giftCardPopup/giftCard'
import { connect } from "react-redux";
import { login } from "./action";
import { bindActionCreators } from "redux";
import { GetPrivateKey } from '../../EthereumLib/utils';
import { createPrivateKey } from './action';


class CreateWalletScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  handleClick = () =>{
    this.props.setModalVisible(false);
    this.props.navigation.navigate('Main');
  }

  constructor() {
    super();

    this.state = {
      key: ''
    }
  }

  componentWillMount() {
    let key = GetPrivateKey(this.props.userInfo.password)

    this.props.createPrivateKey(key);
    this.setState({key: key})
  }

  render () {
    // console.log(privateKey)
    return(
      <View style={{flex:1}}>
        <ContentContainer>
          <DetailText>Write down the backup words and store in a safe place. This is the only way to restore your Balehu Wallet if your phone is lost, stolen or upgraded.</DetailText>
          <BackupText>Write down backup phrase:</BackupText>
          <KeyText>{this.state.key}</KeyText>
        </ContentContainer>
        <ButtonContianer>
          <CustomButton
            fill={Theme.colors.lightBlue}
            width="260"
            text="Get Started"
            onPress={this.handleClick}/>
        </ButtonContianer>
    </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators({
      createPrivateKey
    }, dispatch)
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateWalletScreen);
