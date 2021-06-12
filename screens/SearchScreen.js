import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class SearchScreen extends React.Component {
  render() {
    return( <View style={{fllex:1, justifyContent:'center', alignItems:'center', marginTop: 500}}>
    <Text> Search </Text>
    <TouchableOpacity style = {styles.searchButton}><Text style= {styles.buttonText}> SEARCH </Text></TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    fllex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    marginTop: 500
  },
  
  searchButton: {
    backgroundColor: "lightgreen",
    padding: 10,
    margin:10
  },
  
  buttonText:{
    fontSize : 20
  }
})