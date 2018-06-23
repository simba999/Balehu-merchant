import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import Redeem from '../../components/redeem/Redeem.js';
import Theme from '../../../theme';

class RedeemPromotion extends React.Component {
  render () {
    return(
      <View>
          <Redeem color={Theme.colors.PromotionBlue}/>
          <Redeem color={Theme.colors.PromotionBlue}/>
          <Redeem color={Theme.colors.PromotionBlue}/>
          <Redeem color={Theme.colors.PromotionBlue}/>
      </View>
    )
  }
}

export default RedeemPromotion;
