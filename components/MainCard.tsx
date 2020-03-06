import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { Appbar } from 'react-native-paper';

class MainCard extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.ViewCardBalance}>
        <Text style={styles.ViewCardBalanceText1}>{this.props.OrbTokenBalance} orb</Text>
        <Text style={styles.ViewCardBalanceText2}>{this.props.Currency} {this.props.Fiat}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  ViewCardBalance:{
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#6078EA',
    height:'30%',
    marginBottom:20,
  },
  ViewCardBalanceText1:{
    color:'white',
    fontSize: 21,
  },
  ViewCardBalanceText2:{
    color:'white',
  }
})

export default MainCard;
