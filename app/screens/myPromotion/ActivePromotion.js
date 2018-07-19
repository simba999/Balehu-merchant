import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'
import Theme from '../../../theme';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createPromotion } from './action';
import CustomButton from '../../components/button/CustomButton';
import PromotionRow from './PromotionRow'
import styled from "styled-components/native";
const MainContainer = styled.View`
margin-top:10px;
`;

class ActivePromotion extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  constructor() {
    super();
  }

  componentWillMount() {
    console.log('pro list:', this.props.promotions)
  }

  render () {
    let promotions = [];
    if (this.props.promotions) {
      promotions = this.props.promotions[this.props.userinfo['user-id']];
    }

    return(
      <MainContainer>
        <FlatList
             initialNumToRender={8}
             removeClippedSubviews={true}
             showsVerticalScrollIndicator={false}
             keyExtractor={(item, index) => item.id}
             data={promotions}
             renderItem={({ item }) => (
               <PromotionRow navigation={this.props.navigation} data={item} />
             )} />
      </MainContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators({}, dispatch)
  );
}

const mapStateToProps = state => {
  let signUpReducer = state.signUpReducer
  return {
    error : signUpReducer.error,
    userToken: state.commonReducer.userToken,
    business: state.commonReducer.business,
    userinfo: state.commonReducer.userinfo,
    promotions: state.commonReducer.promotions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivePromotion);
