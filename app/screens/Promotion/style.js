import styled from "styled-components/native";
import Theme from '../../../theme';
import { Dimensions, StyleSheet } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const MainWrapper = styled.View`
  flex:1;
  background-color:#fafafa;
`;

export const PromotionContainer = styled.View`
  padding-left:20px;
  padding-right:20px;
  padding-top:30px;
  padding-bottom:40px;
  background-color:#ffffff;
  elevation:3;
  margin:20px;
`;

export const MarketPlaceContainer = styled.View`
  padding-left:20px;
  padding-right:20px;
  padding-top:30px;
  padding-bottom:40px;
  background-color:#ffffff;
  elevation:3;
  margin:20px;
`;
export const DropContainer =styled.View`
  margin-top:15px;
`;
export const CommonContainer = styled.View`
  margin-top:20px
`;

export const DayContainer = styled.View`
  display:flex;
  flex-direction:row;
  margin-top:${props=> props.row ? '10px': '0px'};
`;

export const DayBoxView = styled.TouchableOpacity`
  width: 63px;
  height: 45px;
  background-color: ${props => props.selected? Theme.colors.twitterBlue : Theme.colors.inputBackgroundColor};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius:3px;
`

export const ButtonContainer = styled.View`
margin-top:${props=> props.changes ? '200px' : '30px'};
justify-content:center;
padding-left:${props=> props.changes ? '0px' : '20px'};
padding-right:${props=> props.changes ? '0px' : '20px'};
align-items:center;
margin-bottom:${props=> props.changes? '0px' : '40px'}
`

export const ImageButtonContainer = styled.View`
  position:absolute;
  right:15px;
  left:20px;
  bottom:15px;
`;
export const Container = styled.View`
  flex:1px;
  flex-direction:row;
`;
export const BackHeader = styled.View`
  height: 60px;
  backgroundColor:#ffffff;
  elevation:2;
  padding-left:11px;
  flex-direction:row;
  align-items:center;
`;
export const RadioContainer = styled.View`
  flex:0.5px;
`;
export const InputContainer = styled.View`
  flex:0.5px;
  justify-content:flex-start;
`;
export const ToolBar =styled.View`
  height:35px;
  flex:1;
  flex-direction:row;
  background-color:#e0e0e0;
  justify-content:flex-start;
  align-items:center;
  padding-left:10px
`;
export const IconContainer = styled.TouchableOpacity`
  padding:8px
  padding-left:10px
  padding-right:10px
`;


//Text
export const BackText = styled.Text`
  color:#9e9e9e;
  fontSize:14px;
  font-family:NunitoSans-SemiBold;
  margin-left:10px;

`;
export const TitleText = styled.Text`
  color:${props=> Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.header};
`;
export const HeadingText = styled.Text`
  color:${props=> Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.medium};
  margin-bottom:15px;
`;

export const DayText = styled.Text`
  color:${props => props.selected ? '#ffffff' : '#9e9e9e'};
  font-family:${props=> Theme.fontFamily.regular};
  font-size:${props=> Theme.fontSize.midregular};
`

export const BitTextInput = styled.TextInput`
  height: 40px;
  padding:10px;
  font-size:${props=> Theme.fontSize.midregular};
  fontFamily:${props=>Theme.fontFamily.regular}
  color:${props=>Theme.colors.warmGrey};
  backgroundColor: ${props=>Theme.colors.inputBackgroundColor};
`;

export const DropdownContainer = styled.View`
  background-color:#eeeeee;
  height:60px;
  justify-content:center;
  padding:0px 10px;
`;

export const ModalIconContainer = styled.TouchableOpacity`
background-color:#ffffff;
width:45px;
height:45px;
padding:11px 0px;
position:absolute;
top:18px;
right:4px;
z-index:9999999;
border-radius:70px;
justify-content:center;
align-items:center;
margin-top:10px;
elevation:5
`;
export const ChangesButtonContainer = styled.View`
  margin-top:20px;
`;

export const SaveChangesText = styled.Text`
  color:${props=> Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.regular};
  font-size:${props=> Theme.fontSize.midregular};
`
