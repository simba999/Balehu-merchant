import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { RNCamera as Camera } from 'react-native-camera';

class QrCodeScan extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  render(){
    return(
      <View>
        <Camera
          type={'back'}
          style={{
          flex: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          height: Dimensions.get('window').width,
          width: 265,
          }}
          onBarCodeRead={(e)=>{
            console.warn(e)
            if(e){
              this.props.setModalVisible(true,'Send Coins',e)
            }
          }}
        >
        </Camera>
      </View>
    );
  }
}
export default QrCodeScan;
