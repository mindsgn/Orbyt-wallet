import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Appbar style={styles.Header}>
        <TouchableOpacity style={styles.HeaderButton}>
          <Icon name={this.props.IconName} size={50} color='white'/>
        </TouchableOpacity>
        <Text style={styles.HeaderFont}>{this.props.ScreenName}</Text>
      </Appbar>
    );
  }
}


const styles = StyleSheet.create({
  Header:{
    backgroundColor: '#6078EA',
  },
  HeaderButton:{
    padding: 10
  },
  HeaderFont:{
    color: "white",
    fontSize:18,
  }
})

export default Header;
