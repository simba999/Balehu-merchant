import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Theme from '../../../theme';
import HistoryComponent from './HistoryComponent';

class TranscationHistory extends React.Component {
  render () {
      return(
        <View>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
        </View>
      )
  }
}

export default TranscationHistory;
