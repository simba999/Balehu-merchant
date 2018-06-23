import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native'
import moment from 'moment';
import styled from "styled-components/native";
import Theme from '../../../theme';
import CustomIcon from '../../components/icon/svgicon';
import CustomButton from '../../components/button/CustomButton'
import _ from "lodash"
export const ButtonContainer = styled.View`
margin:20px;
align-items:center;
justify-content:center;

`
export const TimeContainer = styled.View`
border-bottom-width:1px;
border-bottom-color: #DCDCDC;
`
export const TimeDetailContainer = styled.TouchableOpacity`
padding:5px 20px;
flex-direction:row;
justify-content:space-between;
`

class DateRange extends React.Component {
  constructor() {
    super();
    this.state = {
    times: [],
    timeRange : [],
    }
  }
  componentDidMount() {
    let startDate = moment(new Date ()).startOf('day').add(8,'hour')
    let  endDate = moment(startDate).add(12,'hour')
    let times = [startDate.toDate()]

    while (startDate < endDate) {
      startDate = moment(startDate).add(30,'minute')
      times.push(startDate.toDate())
    }

    this.setState({times})
  }
  handleTimes = (time, i) => {
    let timeRange = this.state.timeRange;

    if (timeRange.length === 2)
      timeRange = [time]
    else
      timeRange.push(time)

    this.setState({timeRange})
  }
  handleOk = () =>{
    let timeRange = this.state.timeRange;
    let selectedTime;
      if(timeRange[0] < timeRange[1])
      {
         selectedTime= `${moment(timeRange[0]).format("LT")} - ${moment(timeRange[1]).format("LT")}`
      }
      else {
         selectedTime= `${moment(timeRange[1]).format("LT")} - ${moment(timeRange[0]).format("LT")}`

      }
      this.props.selectedDays(selectedTime)
      this.props.setModalVisible(false)
  }
  render () {
    const {times, timeRange} = this.state
    return (
      <View>
        {times ? times.map((time,i) =>(
          <TimeContainer key={time.getTime()}>
          <TimeDetailContainer  onPress={() => this.handleTimes(time, i)}>
            <Text>{moment(time).format("LT")}</Text>
            {
              timeRange.indexOf(time) > -1 ? <CustomIcon name="correct" /> : null
            }
          </TimeDetailContainer>
          </TimeContainer>
        ))
      : null}
      {
        timeRange && timeRange.length == 2 ?
        <ButtonContainer>
        <CustomButton
          fill={Theme.colors.twitterBlue}
          text={"Ok"}
          width="145"
          height="38"
          onPress={this.handleOk}
        />
      </ButtonContainer>
        : null
      }
      </View>
    )
  }
}

export default DateRange
