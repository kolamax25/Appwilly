import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
export default class BookTransactions extends React.Component {

    
  constructor() {
     super()
     this.state = {

      hasCameraPerm : null,
      scanned: false,
       scannedData: '',
      buttonState: 'normal'

     } 
    }
getCameraPermission = async()=>{
  const {status} = await Permissions.askAsync(Permissions.CAMERA)
/*
status === "granted is true when user has given permission"
*/
  this.setState({
    hasCameraPerm: status === 'granted',
    buttonState: 'clicked',
    scanned : false
  })
  }
  handleBarCodeScanned= async ({type,data})=>{
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState : 'normal'    
   })
   
    
  }

  render() {
    const hasCameraPerm = this.state.hasCameraPerm;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;

    if (buttonState === 'clicked' && this.getCameraPermission) {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
  )
}

    else if (buttonState === "normal") {
      return( 
        <View style={styles.container}>
            <Text style={styles.displayText}>
              {hasCameraPerm === true ? this.state.scannedData : "Request Camera Permisssion"}
        </Text>
          <TouchableOpacity style={styles.scanButton} onPress={this.getCameraPermission}>
            <Text style={styles.buttonText}> SCAN </Text>
          </TouchableOpacity>
        </View>
        )   ;
}
     
    
  }
}

const styles = StyleSheet.create({
  container: {
    fllex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    marginTop: 500
  },
  
  scanButton: {
    backgroundColor: "lightgreen",
    alignItems:'center', 
    marginTop: 500,
    width: 200,
    height: 100,
    alignSelf : "center"
  },
  
  buttonText:{
    textAlign: 'center',
    marginTop: 40,
    fontSize: 20,
    
  },
  text:{
    textAlign: 'center',
    marginTop: 40,
    fontSize: 20,
    
  },
  displayText: {
    fontSize: 20
  }
})