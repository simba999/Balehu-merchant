import * as React from 'react';
import { View,
  Text, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import CoinScreen from './CoinScreen'


const initialLayout = {
  height:0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <CoinScreen />;
const SecondRoute = () => <View />;

export default class MapScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      routes: [
        { key:'0', title: 'Receive Coins' },
        { key:'1', title: 'Request Coins' }
      ],
    }
  }

  _handleIndexChange = index => this.setState({ index });
  _renderLabel = ({route, index}) => {
  return <Text style={{fontSize:14,color:route.key == this.state.index? Theme.colors.redBalehu : Theme.colors.darkGray,fontFamily:'NunitoSans-Bold'}}>{route.title}</Text>
}
_renderHeader = props =>
<TabBar
  {...props}
  renderLabel={this._renderLabel}
  style = {{backgroundColor:'#ffffff'}}
  tabStyle = {{height:50}}
  indicatorStyle={{ backgroundColor: Theme.colors.redBalehu}}
  />


  _renderScene = SceneMap({
    0: () =>  <CoinScreen screen={'request'}/>,
    1: () => <CoinScreen />
  });
  render(){
    return(
      <TabViewAnimated
        style={{height:590,marginTop:-60}}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
