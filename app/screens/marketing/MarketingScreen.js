import * as React from 'react';
import { View,
  Text,
  Dimensions } from 'react-native';
import CustomIcon from '../../components/icon/svgicon';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Marketing from '../../components/marketing/Marketing';
import Account from '../../components/account/Account';
import Wallet from '../../components/wallet/Wallet'
let { height, width } = Dimensions.get("window");

  const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };

  const FirstRoute = () => <View />;
const SecondRoute = () => <Marketing/>;
const ThirdRoute = () => <Wallet />;
const FourthRoute = () => <Account />;

class MarketingScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  constructor(props){
    super(props)
    const index =  this.props.navigation.getParam('index');
    this.state = {
      index: index ? index : 1,
      routes: [
        { key:'0', title: 'Sales' },
        { key:'1', title: 'Marketing' },
        {key:'2', title:'Wallet'},
        {key:'3', title:'user'}

      ],
    }
  }

  _handleIndexChange = index => this.setState({ index });

  _renderLabel = ({route, index}) => {
    return <View>
      {route.key == 3 ?
        <CustomIcon name="user" height='20' width='20' fill={Theme.colors.darkGray}/> :

          <Text style={{fontSize:16,color:route.key == this.state.index? Theme.colors.redBalehu : Theme.colors.darkGray,fontFamily:'NunitoSans-Bold'}}>{route.title}</Text>
        }
      </View>
    }

    _renderHeader = props =>
    <TabBar
      {...props}
      renderLabel={this._renderLabel}
      style = {{backgroundColor:'#ffffff' }}
      tabStyle = {{height:50}}
      indicatorStyle={{ backgroundColor: Theme.colors.redBalehu }}
      />


    _renderScene = SceneMap({
      0: () =>  <View />,
      1: () => <Marketing navigation={this.props.navigation} />,
      2:() => <Wallet navigation={this.props.navigation} />,
    3:() => <Account handleIndexChange={this._handleIndexChange}navigation={this.props.navigation} />
});

render() {
  return (
    <View style={{flex:1}}>
      <TabViewAnimated
        style={{flex:1}}
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

export default MarketingScreen
