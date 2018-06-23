import { StyleSheet, Platform } from 'react-native';

export default Styles = StyleSheet.create({
  headerLeftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
  },
  headerRightText:{
    color:'#18bfe6',
    fontSize:17,
    fontWeight:'800',
    paddingRight: 20
  },
  LeftContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  backText:{
    color:'#9e9e9e',
    fontSize:14,
    fontFamily:'NunitoSans-SemiBold',
    marginLeft:10,
  }
})
