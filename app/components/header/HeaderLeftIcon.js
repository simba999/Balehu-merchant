import React from 'react';
import { TouchableOpacity,View,Text} from 'react-native';
import Styles from './style';
import CustomIcon from '../icon/svgicon';

class HeaderLeftIcon extends React.Component {

  handleButtonClick = () => {

    this.props.icon == 'left-arrow' ?
      this.props.navigation.goBack(null):
      null
  }
  render () {
    const { icon ,navigation} = this.props;
    return (
      <View style={Styles.LeftContainer}>
      <TouchableOpacity style={ Styles.headerLeftContainer}  onPress={this.handleButtonClick}>
        <CustomIcon name={icon} />
      </TouchableOpacity>
      <Text style={Styles.backText}>Back</Text>
      </View>
    )
  }
}
export default HeaderLeftIcon;
