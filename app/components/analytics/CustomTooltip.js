var React = require('react');
import {View, Text} from 'react-native'
import {
  VictoryChart,
  VictoryArea,VictoryAxis,
  VictoryLine,
  VictoryVoronoiContainer,
  VictoryTooltip} from "victory-native";
import Theme from '../../../theme';
import { DetailCardContainer, DateText} from './style';
import RowComponent from './RowComponent';

export default class CustomTooltip extends React.Component {
  // static defaultEvents = VictoryTooltip.defaultEvents
  render() {
    const {x, y} = this.props;
    return (
      <View><Text>data</Text></View>
    );
  }
}
