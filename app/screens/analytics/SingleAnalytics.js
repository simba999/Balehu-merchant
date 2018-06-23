import React from 'react'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styled from "styled-components/native";
import HeaderRightIcon from '../../components/header/HeaderRightIcon';
import HeaderLeftIcon from '../../components/header/HeaderLeftIcon';
import Analytics from '../../components/analytics/Analytics'
const MainContainer = styled.View`
 flex:1;
 background-color:#fafafa;
 align-items:center;
 padding:0px 10px;

`;
class SingleAnalytics extends React.PureComponent{
  static navigationOptions = (navigation) => ({
    headerTitle:(<View/>),
    headerLeft: (<HeaderLeftIcon icon={'left-arrow'} {...navigation}/>),
    headerRight: (<View/>),
  })
  render () {
    return (
      <MainContainer>
        <Analytics
          title={'Business Performance:'}
          subtitle={'The French Cuisine'}
          reachColor={'rgba(230,61,48,0.7)'}
          engageColor={'rgba(230,61,48,0.3)'}
          redeemColor={'rgb(0,150,136)'}/>
      </MainContainer>
    )
  }
}

export default SingleAnalytics
