import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
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

  class BusinessInformation extends React.Component {
    static navigationOptions = {
      headerVisible:false,
      headerStyle:{
        width:0,
        height:0,
      },
    }

    render () {
      let catagory = [{
        value: 'Food',
      }, {
        value: 'Drink',
      }, {
        value: 'Shopping',
      },{
        value: 'Health',
      },{
        value:'Music',
      }];
      return(
        <View style={{flex:1}}>
          <ContentContainer>
            <TextFieldContainer>
              <TextInput
                label={'Business Name'}
                width={260} />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                label={'Business Address'}
                width={260} />
            </TextFieldContainer>
            <CityContainer>
              <TextFieldContainer>
                <TextInput
                  label={'City'}
                  width={120} />
              </TextFieldContainer>
              <TextFieldContainer>
                <TextInput
                  label={'State'}
                  width={120} />
              </TextFieldContainer>
            </CityContainer>
            <TextFieldContainer>
              <TextInput
                label={'Zip Code'}
                width={260} />
            </TextFieldContainer>
            </ContentContainer>
            <TitleContainer>
            <TitleText>Category</TitleText>
            </TitleContainer>
              <DropdownContainer>
                <Dropdown
                  data={catagory}
                  inputContainerStyle={{width:234,borderBottomColor: 'transparent',marginTop:-15}}
                  placeholder={"Select catgory"}/>
              </DropdownContainer>
            <ButtonContianer>
              <CustomButton
                fill={Theme.colors.lightBlue}
                width="260"
                text="Submit"
                onPress={()=>{
                  this.props.setModalVisible(true,'Create Wallet');
                }}/>
              </ButtonContianer>
          </View>
        )
      }
    }

    export default BusinessInformation ;
