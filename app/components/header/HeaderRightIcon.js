import React from 'react';
import { TouchableOpacity,View,Text } from 'react-native';
import Styles from './style';
import CustomIcon from '../icon/svgicon';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
export default class HeaderRightIcon extends React.Component {
  // handleButtonClick = () => {
  //   this.props.navigation.navigate('Notifications')
  // }
  render () {
    const { icon } = this.props;
    return (
      <TouchableOpacity style={ Styles.headerLeftContainer} onPress={this.handleButtonClick}>
        <CustomIcon name={icon} />
      </TouchableOpacity>
    )
  }
}
