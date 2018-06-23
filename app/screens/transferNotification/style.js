import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
`;

export const Container = styled.View`
  flex-direction:${props => props.buttons ? 'column' : 'row'};
  justify-content:space-between;
  align-items:center;
  margin-top:${props => props.buttons ? '50px' : '0px'};
`;
export const SubContainer = styled.View`
  flex:0.5;
  flex-direction:row;
  margin-top:${props=> props.amount ? '10px' : '0px'}
`;

export const ButtonContainer = styled.View`
margin-top:20px;
display:flex;
justify-content:center;
align-items:center;
`

export const DescText = styled.Text`
  color:${props=> props.price ? Theme.colors.redBalehu : Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.regular};
  font-size:${props=> Theme.fontSize.midregular};
`;

export const DateText = styled.Text`
  color:${props=> Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.midregular};
  margin:30px 0px 20px;
`;

export const TitleText = styled.Text`
  color:${props=> props.price ? Theme.colors.redBalehu : Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.medium};
`;
