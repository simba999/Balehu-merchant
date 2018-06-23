import React from 'react'
import PropTypes from 'prop-types'
import {View,Text} from 'react-native'
import { TabContainer } from './style.js'
import Tab from './Tab'
import CustomIcon from '../icon/svgicon';

class BottomTab extends React.Component {
  render () {
    return(
      <TabContainer>
        <Tab name="food" text="Food" background="#ffa000" height="48" width="48" />
        <Tab name="drinks" text="Drinks" />
        <Tab name="shopping" text="Shopping" />
        <Tab name="health" text="Health"  background="#f44336"/>
        <Tab name="music" text="Music" />
      </TabContainer>
    )
  }
}

export default BottomTab;
