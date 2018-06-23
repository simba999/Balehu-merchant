import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import Redeem from '../../components/redeem/Redeem.js';
import Theme from '../../../theme';

class GiftCardBalance extends React.Component {
  render () {
    return(
      <View>
          <Redeem color={Theme.colors.purple} onPress={()=>{
            this.props.setModalVisible(true,'Ink Coffees Cash');
          }}/>
          <Redeem color={Theme.colors.purple}/>
          <Redeem color={Theme.colors.purple}/>
          <Redeem color={Theme.colors.purple}/>
      </View>
    )
  }
}

export default GiftCardBalance;
