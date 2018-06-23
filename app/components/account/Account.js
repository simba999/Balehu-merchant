import React, { PropTypes } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Modal
} from "react-native";
import { MainContainer,Tabcontainer,IconContainer,NotificationContainer,NotificationText} from './style';

import styled from "styled-components/native";
import Theme from "../../../theme";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import SettingComponent from "../settings/Settings";
import Notifiaction from "../notification/Notification";
import CustomIcon from '../icon/svgicon';
import Card from '../giftCardPopup/giftCard';
var { height, width } = Dimensions.get("window");
const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const FirstRoute = () => <Notifiaction/>;
const SecondRoute = () => <SettingComponent />;

class AccountScreen extends React.Component {

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
        { key: "0", title: "Notifications" },
        { key: "1", title: "Settings" }
      ],
      modalVisible: false,
      modalName:''
    };
  }
setModalVisible = (visible,modal) => {
  this.setState({modalVisible: visible,modalName:modal});
}

_handleIndexChange = index => this.setState({ index });

_renderLabel = ({ route, index }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor:
        route.key == this.state.index ? Theme.colors.lightBlue : '#ffffff',

        borderRightWidth: route.key == 0 ? 1 : 0,

        borderColor: Theme.colors.lightBlue
      }}
      >
      <Text
        style={{
          fontSize: 16,
          margin: 0,
          color:
          route.key == this.state.index
          ? "#fff"
          : Theme.colors.darkGray,
          fontFamily: "NunitoSans-Bold",
          opacity: 1
        }}
        >
        {route.title}
      </Text>
    </View>
  );
};

_renderHeader = props => (
  <TabBar
    {...props}
    renderLabel={this._renderLabel}
    style={{
      borderRadius: 30,
      borderWidth: 1,
      borderColor: Theme.colors.lightBlue,
      overflow: "hidden",
      backgroundColor: "#ffffff",
      elevation: 0,
      marginLeft: 20,
      marginRight: 20
    }}
    indicatorStyle={{ opacity: 0 }}
    tabStyle={{ padding: 0, height: 45, overflow: "hidden" }}
    />
);

_renderScene = SceneMap({
  0: () => <Notifiaction handleIndexChange={this.props.handleIndexChange} navigation={this.props.navigation}  />,
  1: () => <SettingComponent navigation={this.props.navigation} />
});
render() {
  return (
    <MainContainer>
      <Tabcontainer>
      <TabViewAnimated
        style={{ width: width, marginTop: 10, borderRadius: 5,position:'relative' }}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        />
      <NotificationContainer>
        <NotificationText>1</NotificationText>
      </NotificationContainer>
      </Tabcontainer>
    </MainContainer>
  );
}
}

export default AccountScreen;
