import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,

} from 'react-native'
import {StyledTextInput,MainContainer,ConsumerText,CheckboxConatiner,TextInputContainer,TextInputsContainer,ButtonContianer,AddProductText,RewardContainer} from './style';
import CustomButton from '../../components/button/CustomButton';
import CheckBox from 'react-native-checkbox';
import TextInput from '../../components/textfield/CustomTextField';

class LoyaltyReward extends React.Component {
  constructor() {
    super();
    this.state = {
      productChecked:false,
      amountChecked:false,
      RewardCoin:false,
      freeProduct:false,
    }
  }
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  onProductChange = () => {
    this.setState({
      productChecked : !this.state.productChecked,
      amountChecked:false,

    })
  }
  onAmountCheckedChange = () => {
    this.setState({
      productChecked : false,
      amountChecked:!this.state.amountChecked,
        })
  }

  onRewardCheckedChange = () => {
    this.setState({
      RewardCoin:!this.state.RewardCoin,
    })
  }
  onFreeProductChange = () => {
    this.setState({
      freeProduct:!this.state.freeProduct,
    })
  }
  render(){
    return(
      <MainContainer>
        <ConsumerText>Consumer needs to</ConsumerText>
        <CheckboxConatiner>
          <CheckBox
            checked={this.state.productChecked}
            label='Spend a minimum amout'
            checkedImage={require('./black-check-box-with-white-check.png')}
            uncheckedImage={require('./square.png')}
            checkboxStyle={{width:16, height:16}}
            onChange={(checked) => {this.onProductChange(checked)}}
            labelStyle={{color:'#424242',fontSize:14, fontFamily:'NunitoSans-SemiBold'}}/>
        </CheckboxConatiner>

        <TextInputContainer>
          <StyledTextInput
            width={260}
            underlineColorAndroid="transparent"
            placeholder="$50"
            editable={this.state.productChecked}
        />
        </TextInputContainer>
        <CheckboxConatiner>
          <CheckBox
            label='Buy specific product'
            checked={this.state.amountChecked}
            checkedImage={require('./black-check-box-with-white-check.png')}
            uncheckedImage={require('./square.png')}
            checkboxStyle={{width:16, height:16}}
            onChange={(checked) => {this.onAmountCheckedChange(checked)}}
            labelStyle={{color:'#424242',fontSize:14, fontFamily:'NunitoSans-SemiBold'}}  />
        </CheckboxConatiner>
        <TextInputsContainer>
              <StyledTextInput product
                width={120}
                underlineColorAndroid="transparent"
                placeholder="Product"
                editable={this.state.amountChecked}
            />
          <TextInputContainer>
            <StyledTextInput
              width={120}
              underlineColorAndroid="transparent"
              placeholder="Quantity"
              editable={this.state.amountChecked}
          />
          </TextInputContainer>
        </TextInputsContainer>
        <RewardContainer>
          <ConsumerText>Reward with</ConsumerText>
          <CheckboxConatiner>
            <TextInputsContainer>
            <CheckBox
              label='Balehu Coins'
              checked={this.state.RewardCoin}
              checkedImage={require('./gray-checked.png')}
              uncheckedImage={require('./gray-unchecked.png')}
              checkboxStyle={{width:16, height:16}}
              onChange={(checked) => {this.onRewardCheckedChange(checked)}}
              labelStyle={{color:'#424242',fontSize:14, fontFamily:'NunitoSans-SemiBold'}}/>
            {this.state.RewardCoin ?
            <TextInput
                placeholder="Enter Coins"
                width="120" />
              : null }
              </TextInputsContainer>
          </CheckboxConatiner>
          <CheckboxConatiner>
            <TextInputsContainer>
            <CheckBox
              label='Free product(s)'
              checked={this.state.freeProduct}
              checkedImage={require('./gray-checked.png')}
              uncheckedImage={require('./gray-unchecked.png')}
              checkboxStyle={{width:16, height:16}}
              onChange={(checked) => {this.onFreeProductChange(checked)}}
              labelStyle={{color:'#424242',fontSize:14, fontFamily:'NunitoSans-SemiBold'}}/>
            {this.state.freeProduct ?
              <TextInput
                placeholder="Enter Offer"
                width="120" />
              : null }
              </TextInputsContainer>
        </CheckboxConatiner>
        </RewardContainer>
        <ButtonContianer>
          <CustomButton
            fill={Theme.colors.lightBlue}
            width="260"
            text="Submit"/>
        </ButtonContianer>
      </MainContainer>
    )
  }
}
export default LoyaltyReward;
