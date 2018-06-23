
import HomeScreen from '../screens/home/HomeScreen';
import AccountScreen from '../components/account/Account';
import MainScreen from '../screens/main/MainScreen'
import MarketingScreen from '../screens/marketing/MarketingScreen'
import AddPromotion from '../screens/Promotion/promotion.js';
import LoyaltyReward from '../screens/loyalty/LoyaltyReward';
import AnalyticPageScreen from '../screens/analytics/AnalyticPageScreen'
import MyPromotionScreen from '../screens/myPromotion/MyPromotionScreen.js'
import MyReward from '../screens/myReward/MyReward.js'
import SingleAnalytics from '../screens/analytics/SingleAnalytics.js'

import {
  StackNavigator,
} from 'react-navigation';

const navigationOptions = {
  headerStyle: {
    height: 60,
    backgroundColor:'#ffffff',
    elevation:2,
    paddingLeft:11,
  },
};
const Mainstack = StackNavigator({
  Home:{ screen: HomeScreen},
  Account:{ screen: AccountScreen},
  Main:{ screen: MainScreen },
  Marketing:{ screen: MarketingScreen },
  Promotion: { screen:AddPromotion },
  Loyalty: {screen: LoyaltyReward},
  AnalyticPage:{screen: AnalyticPageScreen},
  SingleAnalytics:{screen: SingleAnalytics},
  MyPromotion:{screen:MyPromotionScreen},
  MyReward:{screen:MyReward},
},
	{
    navigationOptions,
	initialRouteName: 'Home',
});
export default Mainstack;
