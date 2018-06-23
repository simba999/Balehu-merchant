import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import {ContentContainer,InnerContainer,CoinsDetailsText,DateTimeText,FromText,DetailText,NameText,DollarText} from './style';

class HistoryComponent extends React.Component {
  render () {
    return(
    <ContentContainer>
        <InnerContainer>
          <CoinsDetailsText>Coins Received</CoinsDetailsText>
          <DateTimeText>12 May, 2018 - 12.38 pm</DateTimeText>
        </InnerContainer>
        <InnerContainer>
          <FromText>From</FromText>
          <DetailText>+64.00</DetailText>
        </InnerContainer>
        <InnerContainer>
          <NameText>Ink Coffee</NameText>
          <DollarText>$24.08 USD</DollarText>
        </InnerContainer>
    </ContentContainer>
)
  }
}

export default HistoryComponent;
