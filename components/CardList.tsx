import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class CardList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Wallets:{
        
      }
    }
  }

  render(){
    return(
      <View style={styles.View}>
        <View>
          <Text style={styles.ViewHeaderText}>Wallets</Text>
        </View>
        <View style={styles.CardViewList}>

          <TouchableOpacity style={styles.CardView} onPress={()=> alert("yes")}>
            <Text>Card Name</Text>
            <Text>Amount</Text>
            <Text>Fiat Amount</Text>
          </TouchableOpacity>

          <View style={styles.CardView}>
            <Text>Card Name</Text>
            <Text>Amount</Text>
            <Text>Fiat Amount</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  View:{
    margin: 5,
  },
  CardViewList:{
    flexDirection: 'row',
  },
  CardView:{
    backgroundColor: '#6078EA',
    width: 250,
    height: 150,
    padding: 20,
    borderRadius: 10,
    margin: 5
  },
  ViewHeaderText:{
    fontSize: 18,
  }
})

export default CardList;
