import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  PromotionCard,
  TitleText,
  PromotionTitle,
  TabContainer
} from './style';
import CustomButton from '../../components/button/CustomButton';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
let { height, width } = Dimensions.get("window");
import ActivePromotion from './ActivePromotion'
import HeaderRightIcon from '../../components/header/HeaderRightIcon';
import HeaderLeftIcon from '../../components/header/HeaderLeftIcon';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View/>;
const SecondRoute = () => <ActivePromotion/>;
const ThirdRoute = () => <View />;

class MyPromotion extends React.Component {
  static navigationOptions = (navigation) => ({
    headerTitle:(<View/>),
    headerLeft: (<HeaderLeftIcon icon={'left-arrow'} {...navigation}/>),
    headerRight: (<View/>),
  })
  constructor(props){
    super(props)
    this.state = {
      index: 1,
      routes: [
        { key:'0', title: 'All' },
        { key:'1', title: 'Active' },
        {key:'2', title:'Paused'},

      ],
    }
  }
  _handleIndexChange = index => this.setState({ index });

  _renderLabel = ({route, index}) => {
    return <View>
      <Text style={{fontSize:14,color:route.key == this.state.index? Theme.colors.blue : Theme.colors.darkGray,fontFamily:'NunitoSans-Bold'}}>{route.title}</Text>
    </View>
  }

  _renderHeader = props =>
<TabContainer>
  <TabBar
    {...props}
    renderLabel={this._renderLabel}
    style = {{backgroundColor:'#ffffff',shadowOpacity:0}}
    tabStyle = {{height:50}}
    indicatorStyle={{ backgroundColor: Theme.colors.blue }}
    />
</TabContainer>
  _renderScene = SceneMap({
    0: () =>  <View />,
    1: () => <ActivePromotion navigation={this.props.navigation}/>,
    2:() => <View />,
  });
  render () {
    return(
      <ScrollView>
      <MainContainer>
        <PromotionCard>
          <PromotionTitle>
              <TitleText>My Marketing Campaigns</TitleText>
          </PromotionTitle>
            <TabViewAnimated
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
              />
          </PromotionCard>
        </MainContainer>
      </ScrollView>
      )
    }
  }

  export default MyPromotion;
