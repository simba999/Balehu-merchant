import styled from "styled-components/native";
import Theme from '../../../theme';

export const NotificationContainer = styled.View`
  position:absolute;
  height:15px;
  width:15px;
  background-color:${props => Theme.colors.redBalehu};
  border-radius:8px;
  justify-content:center;
  align-items:center;
  left:65px;
  top:5px;
`;
export const NotificationText = styled.Text`
  color:${props => Theme.colors.white};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.tiny};
`;
