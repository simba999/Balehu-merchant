import React from 'react'
import {View,Text} from 'react-native'
import {TabItem,
        FoodIconContainer,
        TabText} from './style.js'
import CustomIcon from '../icon/svgicon';

class Tab extends  React.Component {
  render(){
    return (
      <View>
        <TabItem>
          <FoodIconContainer background={this.props.background} height={this.props.height} width={this.props.width}>
            <CustomIcon name={this.props.name}/>
          </FoodIconContainer>
        </TabItem>
        <TabText>
          {this.props.text}
        </TabText>
      </View>
    )
  }
}
export default Tab
