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
import Analytics from './Analytics'
class PromotionAnalytics extends React.PureComponent{
  render () {
    return (
      <ScrollView contentContainerStyle={{paddingBottom:5,alignItems:'center',justifyContent:'center'}}>
        <Analytics title={'Promotion:'} subtitle={'Wednesday’s Free Drinks'} reachColor={'rgba(63,81,181,0.7)'} engageColor={'rgba(63,81,181,0.3)'} redeemColor={'rgb(244,67,54)'}/>
        <Analytics title={'Promotion:'} subtitle={'Friday’s Free Drinks'} reachColor={'rgba(63,81,181,0.7)'} engageColor={'rgba(63,81,181,0.3)'} redeemColor={'rgb(244,67,54)'}/>

      </ScrollView>
    )
  }
}

export default PromotionAnalytics
