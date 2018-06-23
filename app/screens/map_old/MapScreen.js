import * as React from 'react';
import { View,
  Text, Dimensions } from 'react-native';
  import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
  import MapComponent from '../../components/map/MapComponent';
  import Wallets from '../../components/wallets/wallets'
  import AccountComponent from '../../components/account/Account';
  import {NotificationContainer,NotificationText} from './style';
  var { height, width } = Dimensions.get("window");

  const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

  const FirstRoute = () => <MapComponent />;
const SecondRoute = () => <Wallets />;
const ThirdRoute = () => <AccountComponent />;

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
        { key:'0', title: 'Discover' },
        { key:'1', title: 'Wallets' },
        {key:'2', title:'Account'}
      ],
    }
  }

  _handleIndexChange = index => this.setState({ index });
  _renderLabel = ({route, index}) => {
    return <View>
              <Text style={{fontSize:16,color:route.key == this.state.index? Theme.colors.redBalehu : Theme.colors.darkGray,fontFamily:'NunitoSans-Bold'}}>{route.title}</Text>
                { route.key == 2 ?
                  <NotificationContainer>
                  <NotificationText>1</NotificationText>
                </NotificationContainer>
                :
                null
              }
            </View>
  }
  _renderHeader = props =>
  <TabBar
    {...props}
    renderLabel={this._renderLabel}
    style = {{backgroundColor:'#ffffff' }}
    tabStyle = {{height:50}}
    indicatorStyle={{ backgroundColor: Theme.colors.redBalehu ,marginLeft:15,marginRight:15, width:this.state.index == 2 ? 100 :90}}
    />


  _renderScene = SceneMap({
    0: () =>  <MapComponent />,
  1: () => <Wallets />,
2:() => <AccountComponent />
});

render() {
  return (
    <View style={{flex:1}}>
      <TabViewAnimated
        style={{position:'relative',width: width}}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        />
    </View>
  );
}
}
