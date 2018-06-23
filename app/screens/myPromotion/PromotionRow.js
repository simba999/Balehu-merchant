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
  toggleSwitch = (value) => {
    this.setState({switchValue: value})
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
          <TitleText>{this.text_truncate(data.title,18,'..')}</TitleText>
          <ContentText>{this.text_truncate(data.description,80,'..')} </ContentText>
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
        <ActiveText>Active</ActiveText>
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

export default PromotionRow;
