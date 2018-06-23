import styled from "styled-components/native";
import Theme from '../../../theme';

export const ContentContainer = styled.View`
  padding-bottom:15px;
  border-bottom-width: 1px;
  border-bottom-color:#e0e0e0;
`;

export const InnerContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-top:10px;
`;

export const CoinsDetailsText = styled.Text`
color:${props=> Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
`;

export const DateTimeText = styled.Text`
color:${props=> Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midSmall};
`;

export const FromText = styled.Text`
color:${props=> Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midregular};
`;

export const DetailText = styled.Text`
color:${props=> Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
`;

export const NameText = styled.Text`
color:${props=> Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midregular};
`;

export const DollarText = styled.Text`
color:${props=> Theme.colors.redBalehu};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.small};
`;
