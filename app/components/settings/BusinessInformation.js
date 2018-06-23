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
import ImagePicker from 'react-native-image-crop-picker';

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

const ButtonContianer = styled.View`
  margin-top:55px;
  margin-left:20px;
`;

const FormContainer = styled.View`
  margin-top:20px;
  padding:0px 20px;
`;

const TextFieldContainer = styled.View`
  margin-bottom:25px
`;


export const CityContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:260px;
`;

class BusinessInformation extends React.Component {
  uploadImage = () => {
    ImagePicker.openPicker({
      includeBase64: true,
      compressImageQuality: 0.5
    })
    .then(image => {
      let imageSrc = `data:${image.mime};base64,${image.data}`;
      console.log(imageSrc);
    });
  }
  render () {
  return(
    <MainWrapper>
      <CardTitle>{this.props.title}</CardTitle>
      <ImageContainer>
        <ImageBackground source={require('../../../assets/images/layer-1204.png')} style={{width:300,height:120}}>
            <ButtonContianer>
                <CustomButton border={Theme.colors.white}
                width="130"
                text="Change picture"
                height="35"
                onPress={this.uploadImage}/>
            </ButtonContianer>
        </ImageBackground>
      </ImageContainer>
      <FormContainer>
      <TextFieldContainer>
        <TextInput
          label={'Business Name'}
          width={260}
          placeholder={'The French Cuisine'} />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextInput
          label={'Business Address'}
          width={260}
          placeholder={'123 6th St. 32904'} />
      </TextFieldContainer>
      <CityContainer>
      <TextFieldContainer>
        <TextInput
          label={'City'}
          width={120}
          placeholder={'Melbourne'} />
      </TextFieldContainer>
      <TextFieldContainer>
        <TextInput
          label={'State'}
          width={120}
          placeholder={'Florida'} />
      </TextFieldContainer>
    </CityContainer>
    <TextFieldContainer>
      <TextInput
        label={'Zip Code'}
        width={260}
        placeholder={'32904'} />
    </TextFieldContainer>
      </FormContainer>
    </MainWrapper>
  )
  }
}

export default BusinessInformation;
