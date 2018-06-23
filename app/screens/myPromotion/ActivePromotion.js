import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'
import Theme from '../../../theme';
import CustomButton from '../../components/button/CustomButton';
import PromotionRow from './PromotionRow'
import styled from "styled-components/native";
const MainContainer = styled.View`
margin-top:10px;
`;
const data = [
  {
    id:1,
    title:"Friday Salad Specials!",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,voluptas sit aspernatur aut odit aut. ",
    picture:'../../../assets/images/layer-1.png',
  },
  {
    id:2,
    title:"Monday Specials!",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,voluptas sit aspernatur aut odit aut. ",
    picture:'../../../assets/images/layer-1.png',

  },
  {
    id:3,
    title:"Sunday Salad Specials!",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,voluptas sit aspernatur aut odit aut. ",
    picture:'../../../assets/images/layer-1.png',

  }

]
class ActivePromotion extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {
    return(
      <MainContainer>
        <FlatList
             initialNumToRender={8}
             removeClippedSubviews={true}
             showsVerticalScrollIndicator={false}
             keyExtractor={(item, index) => item.id}
             data={data}
             renderItem={({ item }) => (
               <PromotionRow navigation={this.props.navigation} data={item} />
             )} />
      </MainContainer>
    )
  }
}

export default ActivePromotion;
