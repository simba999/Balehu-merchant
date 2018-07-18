import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  ButtonContainer,
  RowContainer,
  TitleText,
  ContentText,
  DetailContianer,
  ImageContainer,
  SwitchContainer,
  ContentContaner,
  BottomRowContainer,
  ActiveText,
} from './PromotionRowStyle.js';
import CustomButton from '../../components/button/CustomButton';

import { connect } from "react-redux";
import { login } from "./action";
import { bindActionCreators } from "redux";
import { updatePromotionStatusAction } from './action';


class PromotionRow extends React.Component {
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
      switchValue: false,
    }
  }

  componentWillMount() {
    this.setState({
      switchValue: !this.props.data['is-deleted']
    })
  }

  toggleSwitch = (value) => {
    const data = {
      "is-deleted": !value,
      "promotion-id": this.props.data['promotion-id']
    }

    updatePromotionStatusAction(this.props.userToken.token, data)
    
  }

  text_truncate = (str, length, ending) => {
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

  render () {
    let data = this.props.data ? this.props.data : ''
    return(
      <MainContainer>
        <RowContainer>
          <ImageContainer>
            <Image
            source={require('../../../assets/images/layer-1.png')} style={{width:120,height:67}}/>
          </ImageContainer>
          <DetailContianer>
            <TitleText>{this.text_truncate(data.headline,18,'..')}</TitleText>
            <ContentText>{this.text_truncate(data.details,80,'..')} </ContentText>
          </DetailContianer>
        </RowContainer>
        <BottomRowContainer>
          <SwitchContainer>
          <Switch
            onValueChange = {this.toggleSwitch}
            value={this.state.switchValue}
            onTintColor="#e3e5ef"
            thumbTintColor={this.state.switchValue ? Theme.colors.skyBlue :"#e3e5ef"}
            tintColor="#e3e5ef"/>
          <ActiveText>{this.state.switchValue ? 'Active' : 'Inactive'}</ActiveText>
          </SwitchContainer>
          <ButtonContainer>
            <CustomButton
              border={"#e0e0e0"}
              textColor={"#757575"}
              fontSize={Theme.fontSize.small}
              width="96"
              height="33"
              text="Edit Promotion"
              data={data}
              onPress={()=>{
                this.props.navigation.navigate('Promotion',{index:data});
              }}
              />
          </ButtonContainer>
          <ButtonContainer>
            <CustomButton
              border={"#e0e0e0"}
              textColor={"#757575"}
              fontSize={Theme.fontSize.small}
              width="85"
              height="33"
              text="Analytics"
              onPress={()=>{
                this.props.navigation.navigate('SingleAnalytics');
              }}/>
          </ButtonContainer>
        </BottomRowContainer>
      </MainContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return Object.assign(
      { dispatch: dispatch },
      bindActionCreators({
        updatePromotionStatusAction
      }, dispatch)
    );
  }

const mapStateToProps = state => {
  let loginReducer = state.loginReducer
  let commonReducer = state.commonReducer
  console.log('Eman: ', state)
  return {
    error:loginReducer.error,
    userToken: commonReducer.userToken,
    userInfo: commonReducer.userinfo,
    market: commonReducer.market
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromotionRow);