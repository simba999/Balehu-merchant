import styled from "styled-components/native";
import Theme from '../../../theme';

export const ContentContainer = styled.View`
justify-content:center;
align-items:center;
`;

export const HeadingText = styled.Text`
  color:${props=> Theme.colors.redBalehu};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.large};
`;

export const TextFieldContainer = styled.View`
margin-bottom:25px
`;

export const ButtonContianer = styled.View`
 margin-top:35px;
 justify-content:center;
 align-items:center;
`;

export const CityContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:260px;
`;
export const DropdownContainer = styled.View`
  background-color:#eeeeee;
  height:60px;
  justify-content:center;
  padding:0px 10px;
  margin-top:10px

`;
export const TitleContainer = styled.View`
justify-content:flex-start;;
align-items:flex-start;
`;
export const TitleText = styled.Text`
  text-align:left;
  color:${props => Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.normal};
`;
