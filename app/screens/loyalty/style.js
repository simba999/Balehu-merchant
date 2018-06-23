import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
`;

export const ConsumerText = styled.Text`
color:${props=> Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
`;

export const CheckboxConatiner = styled.View`
margin-top:5px;
`;
export const TextInputContainer = styled.View`
margin-top:-15px;
margin-bottom:13px;
`;
export const TextInputsContainer = styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`;
export const StyledTextInput = styled.TextInput`
    background-color:${props => Theme.colors.inputBackgroundColor};
    width:${props => props.width}px;
    height:50px;
    padding-left:15px;
    margin-top:${props => props.product ? '-8px' :' 20px'};
`;
export const AddProductText = styled.Text`
color:#5c9eff;
font-family:${props=> Theme.fontFamily.bold};
font-size:14px;
margin-top:5px;
`;

export const RewardContainer = styled.View`
  margin-top:20px;
`;

export const ButtonContianer = styled.View`
  margin-top:20px;
`;
