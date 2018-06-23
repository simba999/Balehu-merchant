import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native'
import Theme from '../../../theme';
import styled from "styled-components/native";
import TextInput from '../textfield/CustomTextField';
import CustomButton from '../button/CustomButton';

const MainWrapper = styled.View`
background-color:#ffffff;
elevation:2;
margin-top:20px;
`;

const CardTitle = styled.Text`
color: ${props => Theme.colors.darkGray};
margin-left:15px;
margin-top:20px;
font-family:${props => Theme.fontFamily.bold};
font-size:${props => Theme.fontSize.medium};
`;

const ImageContainer = styled.View`
margin-top:20px;
`;

const FormContainer = styled.View`
margin-top:20px;
padding:0px 20px;
`;

const TextFieldContainer = styled.View`
margin-bottom:25px
`;


const CityContainer = styled.View`
display:flex;
flex-direction:row;
justify-content:space-between;
width:260px;
`;

const PasswordContainer = styled.View`
margin-bottom:20px;
`;

const PasswordText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.normal};
`;

const ButtonContianer= styled.View`
  margin-top:20px;
`;

class ContactInformation extends React.Component {
  render () {
    return(
      <MainWrapper>
        <CardTitle>{this.props.title}</CardTitle>
        <FormContainer>
          <CityContainer>
            <TextFieldContainer>
              <TextInput
              label={'First Name'}
              width={120}
              placeholder={'John'} />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
              label={'Last Name'}
              width={120}
              placeholder={'Doe'} />
            </TextFieldContainer>
          </CityContainer>
          <TextFieldContainer>
            <TextInput
            label={'Email Address'}
            width={260}
            placeholder={'mail@sample.com'} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
            label={'Phone'}
            width={260}
            placeholder={'0123456789'} />
          </TextFieldContainer>
          <PasswordContainer>
            <PasswordText>Password</PasswordText>
            <ButtonContianer>
            <CustomButton
              onPress={()=>{
                this.props.setModalVisible(true,'Change Password');
              }}
            fill='#9e9e9e'
            width="260"
            text="Change Password"/>
            </ButtonContianer>
            <ButtonContianer>
            <CustomButton
            fill={Theme.colors.lightBlue}
            width="260"
            text="Save Information"/>
            </ButtonContianer>
          </PasswordContainer>
        </FormContainer>
      </MainWrapper>
    )
  }
}

export default ContactInformation;
