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
  HeadingTextContainer,
  CityContainer,
  CommonContainer,
  DropdownContainer,
  TitleText,
  TitleContainer, } from './style';
import { Dropdown } from 'react-native-material-dropdown';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';
import { getMarketCategory } from '../../actions/business';
import { createWallet } from '../../EthereumLib/utils';
import { createNewBusiness, getMarketCategories } from './action';

import { connect } from "react-redux";
import { login } from "./action";
import { bindActionCreators } from "redux";


class BusinessInformation extends React.Component {
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
      business_name: 'Alchohol',
      business_address: 'Wall Street Bar',
      business_description: 'for drinking',
      contact_name: 'johnmarin@mail.com',
      state: 'wall street',
      city: 'New York',
      postal_code: '12923',
      phone_number: '123456789',
      categoryVal: 1,
      errMsg: '',
      category: [{
        value: 'Food',
      }, {
        value: 'Drink',
      }, {
        value: 'Shopping',
      },{
        value: 'Health',
      },{
        value:'Music',
      }]
    }

    this.onChangeText = this.onChangeText.bind(this)
    this._signupBusiness = this._signupBusiness.bind(this)
  }

  componentWillMount() {
    const self = this;

    getMarketCategory(this.props.userToken.token).then((res) => {
      self.setState({category: res.categories})
    })
    // this.props.getMarketCategories(this.props.userToken.token);
  }

  _signupBusiness() {
    const self = this;

    if (
      this.state.business_name === '' ||
      this.state.business_address === '' ||
      this.state.business_description === '' ||
      this.state.city === '' ||
      this.state.state === '' ||
      this.state.postal_code === '' ||
      this.state.phone_number === ''
    ) {
      this.setState({ errMsg: 'Input Fields must be filled!' })
    } else {
      const data = {
        'business-name': this.state.business_name,
        'address': this.state.business_address,
        'city': this.state.city,
        'state-or-province': this.state.state,
        'postal-code': this.state.postal_code,
        'description': this.state.business_description,
        'phone': this.state.phone_number,
        'contact-name': this.state.contact_name,
        'category-id': this.state.categoryVal
      };

      this.props.createNewBusiness(this.props.userToken.token, data).then((res) => {
        if (typeof(res.code) == "undefined") {
          // await createWallet(self.props.userInfo.password, self.props.userToken.token).then((res) => {
          //   console.log(':::',res)
          // })
          
          self.props.setModalVisible(true,'Create Wallet');
        } else {
          self.setState({ errMsg: res.message })
        }
        
      }).catch((err) => {
        self.setState({errMsg: err.message})
      });
    }
  }

  onChangeText(value, index) {
    this.setState({ categoryVal: parseInt(index) })
  }

  render () {
    let { category } = this.state;
    let { market } = this.props;
    console.log('category: ', category, market)

    return(
      <View style={{flex:1}}>
        <Text style={{ 'color': 'red' }}>{this.state.errMsg}</Text>
        <ContentContainer>
          <TextFieldContainer>
            <TextInput
              label={'Business Name'}
              value={this.state.business_name}
              onChangeText={(e) => this.setState({business_name: e})}
              width={260} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              label={'Business Address'}
              value={this.state.business_address}
              onChangeText={(e) => this.setState({business_address: e})}
              width={260} />
          </TextFieldContainer>
          <CityContainer>
            <TextFieldContainer>
              <TextInput
                label={'City'}
                value={this.state.city}
                onChangeText={(e) => this.setState({city: e})}
                width={120} />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                label={'State'}
                value={this.state.state}
                onChangeText={(e) => this.setState({state: e})}
                width={120} />
            </TextFieldContainer>
          </CityContainer>
          <TextFieldContainer>
            <TextInput
              label={'Zip Code'}
              value={this.state.postal_code}
              onChangeText={(e) => this.setState({postal_code: e})}
              width={260} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              label={'Phone Number'}
              value={this.state.phone_number}
              onChangeText={(e) => this.setState({phone_number: e})}
              width={260} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              label={'Business Description'}
              value={this.state.business_description}
              onChangeText={(e) => this.setState({business_description: e})}
              width={260} />
          </TextFieldContainer>
           <TextFieldContainer>
            <TextInput
              label={'Contact Name'}
              value={this.state.contact_name}
              onChangeText={(e) => this.setState({contact_name: e})}
              width={260} />
          </TextFieldContainer>
          </ContentContainer>
          <TitleContainer>
          <TitleText>Category</TitleText>
          </TitleContainer>
            <DropdownContainer>
              <Dropdown
                ref={this.categoryRef}
                data={category}
                onChangeText={this.onChangeText}
                inputContainerStyle={{width:234,borderBottomColor: 'transparent',marginTop:-15}}
                placeholder={"Select catgory"} />
            </DropdownContainer>
          <ButtonContianer>
            <CustomButton
              fill={Theme.colors.lightBlue}
              width="260"
              text="Submit"
              onPress={()=>{
                this._signupBusiness()
              }}/>
            </ButtonContianer>
        </View>
      )
    }
  }


function mapDispatchToProps(dispatch) {
    return Object.assign(
      { dispatch: dispatch },
      bindActionCreators({
        getMarketCategories,
        createNewBusiness
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInformation);

