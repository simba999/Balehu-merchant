import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,StyleSheet,
  TextInput,
  Modal,
  ScrollView,
  Dimensions,Platform
} from 'react-native';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';
import Theme from '../../../theme';
import { Container, PromotionText, LabelText, IconContainer,CheckboxContainer,ModelIconContainer} from "./mapStyle";
import CheckBox from 'react-native-checkbox';
import MapView, { Marker, Callout,PROVIDER_GOOGLE } from 'react-native-maps';
import CompanyDetail from '../companyDetail/companyDetailCard';
import CustomIcon from '../icon/svgicon';
import BottomTab from '../tab/BottomTab';
import Card from '../giftCardPopup/giftCard';
import BuyGiftCard from '../buyGiftCard/buyGiftCard';
var {height, width} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      modalVisible: false,
      modalName:'',
      latitude: null,
      longitude: null,
      error: null,

    }
  }
  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({latitude:position.coords.latitude,longitude:position.coords.longitude})
      },
      (error) => {console.log(JSON.stringify(error))
        this.setState({latitude:23.0225,longitude:72.5714})
      },
      {enableHighAccuracy: Platform.OS != 'android', timeout: 20000, maximumAge: 2000 }
    );
  }
  setModalVisible = (visible,modal) => {
    this.setState({modalVisible: visible,modalName:modal});
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render () {
    const { region } = this.props;
    return(
      <View style ={styles.container}>
        {this.state.latitude && this.state.longitude ?
          <MapView
            provider={ PROVIDER_GOOGLE }
            style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={true}

            initialRegion={{
              latitude:this.state.latitude ,
              longitude: this.state.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            >
            <Marker coordinate={{latitude: 23.0225,
                longitude: 72.5714}}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
              </Marker>

            </MapView>
            : null }
            <IconContainer>
              <CheckboxContainer>
                <CheckBox
                  onClick={()=>this.onClick(data)}
                  label=' '
                  checkedImage={require('../../../assets/images/check-sign-in-a-rounded-black-square.png')}
                  uncheckedImage={require('../../../assets/images/black-check-box.png')}
                  checkboxStyle={{width:16, height:16}}
                  labelStyle={{color:'#47525E',fontSize:16}}
                  />
              </CheckboxContainer>
              <PromotionText>Show promotion only</PromotionText>
            </IconContainer>
            <BottomTab/>
            <Svg
              height="200"
              width="430"
              >
              <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="400">
                  <Stop offset="0" stopColor="transparent" stopOpacity="0" />
                  <Stop offset="1" stopColor="transparent" stopOpacity="1" />
                  <Stop offset="2" stopColor="rgba(0,0,0,0)" stopOpacity="0.6" />
                  <Stop offset="3" stopColor="rgba(0,0,0,0.2)" stopOpacity="0.8" />
                  <Stop offset="4" stopColor="rgba(0,0,0,0.6)" stopOpacity="0.9" />
                </LinearGradient>
              </Defs>
              <Rect
                x="25"
                y="5"
                width="430"
                height="200"
                fill="url(#grad)"
                />
            </Svg>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              >
              <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
                <ModelIconContainer onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <CustomIcon
                    name="cross"
                    fill='#000000'
                    height="15"
                    width="15"
                    />
                </ModelIconContainer>
                <ScrollView>
                  {
                    this.state.modalName=='Buy Gift Card'?
                    <Card title={this.state.modalName}>
                      <BuyGiftCard  setModalVisible={this.setModalVisible}/>
                    </Card>
                    :
                    <CompanyDetail setModalVisible={this.setModalVisible} />
                  }
                </ScrollView>
              </View>
            </Modal>
          </View>
        )
      }
    }

    export default MapComponent;
    const styles = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
    });
