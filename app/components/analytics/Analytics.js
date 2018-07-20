import React from 'react'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  MainContainer,
  CardContainer,
  TitleContainer,
  HeaderText,
  TitleText,
  ChartContainer,
  ChartInnerContainer,
  RoundContentContainer,
  DetailCardContainer,
  ButtonContainer,
  HeaderContainer,
  DateText} from './style.js';
import {
  VictoryChart,
  VictoryArea,VictoryAxis,
  VictoryLine,
  VictoryVoronoiContainer,
  VictoryTooltip
} from "victory-native";
import CustomButton from '../../components/button/CustomButton';
import RowComponent from './RowComponent.js'
import CustomTooltip from './CustomTooltip'
import { getAnalytics } from './action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
https://stackblitz.com/edit/victory-chart-demo

  class AnalyticsScreen extends React.PureComponent {
    constructor() {
      super();
    }

    componentWillMount() {
      const data = {
       "from-date": "2017-07-05T22:08:41+00:00",
       "interval": "month",
       "promotion-id": 18,
       "to-date": "2018-08-05T22:08:41+00:00"
      }

      this.props.getAnalytics(this.props.userToken.token, this.props.userinfo['user-id'], data).then((res) => {
        if (res.code === 500) {
          alert(res.message)
        }    
      })

    }

    render() {
      let redeemed = [], reached = [], engaged = [];
      
      if (this.props.analytics && this.props.analytics[this.props.userinfo['user-id']]) {
        reached = this.props.analytics[this.props.userinfo['user-id']].reached;
        redeemed = this.props.analytics[this.props.userinfo['user-id']].redeemed;
        engaged = this.props.analytics[this.props.userinfo['user-id']].engaged;
      }

      return (
        <CardContainer>
          <HeaderContainer>
            <HeaderText>{this.props.title}</HeaderText>
          </HeaderContainer>
          <TitleContainer>
            <TitleText>{this.props.subtitle}</TitleText>
          </TitleContainer>
          <RoundContentContainer>
            <RowComponent color={this.props.reachColor} text="Reach" />
            <RowComponent color={this.props.engageColor} text="Engagement" />
            <RowComponent color={this.props.redeemColor} text="Redeem" />
          </RoundContentContainer>
          <ChartContainer>
            <VictoryChart
              containerComponent={
                <VictoryVoronoiContainer voronoiDimension="x"
                  labels={(d) => `y: ${d.y}`}
                  renderInPortal={true}
                  labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}
                  />
              }
              >
            <VictoryAxis
              domain={[2, 10]}
              tickValues={[2, 4,6,8,10]}

              />
            <VictoryAxis dependentAxis
              domain={[0, 100]}
              />
            <VictoryArea
              style={{ data: { fill:this.props.reachColor ? this.props.reachColor : 'rgba(230,61,48,0.7)'},
              labels: {fill: 'rgba(230,61,48,0.7)'}}}
              data={reached}
              />
            <VictoryArea
              style={{ data: { fill: this.props.engageColor ? this.props.engageColor :'rgb(230,61,48,0.3)'},
              labels: {fill: 'rgb(230,61,48,0.3)'}  }}
              data={reached}
              />
            <VictoryLine data={reached}
              style={{ data: { stroke:this.props.redeemColor ? this.props.redeemColor:'rgb(0,150,136)' },
              labels: {fill: 'rgb(0,150,136)'} }}
              />

          </VictoryChart>
        </ChartContainer>
        {this.props.title == "Analytics" ?

            <ButtonContainer>
              <CustomButton
                fill={Theme.colors.skyBlue}
                width={280}
                text={"View All Analytics"}
                onPress={()=>{
                  this.props.navigation.navigate('AnalyticPage');
                }}  />
            </ButtonContainer>

            : null
        }
        <DetailCardContainer Analytics={this.props.title == "Analytics" ? "Analytics" : '' }>
          <DateText>Mar 4, 2018</DateText>
          <RowComponent color={this.props.reachColor} text="Reach" value='49' />
          <RowComponent color={this.props.engageColor} text="Engaged" value='38' />
          <RowComponent color={this.props.redeemColor} text="Redeems" value='12' />
        </DetailCardContainer>
      </CardContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators({getAnalytics}, dispatch)
  );
}

const mapStateToProps = state => {
  let signUpReducer = state.signUpReducer
  return {
    error : signUpReducer.error,
    userToken: state.commonReducer.userToken,
    business: state.commonReducer.business,
    userinfo: state.commonReducer.userinfo,
    promotion: state.commonReducer.promotion,
    analytics: state.commonReducer.analytics,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsScreen);