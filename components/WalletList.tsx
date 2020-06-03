/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';
import {PRIMARY_COLOR} from './../utils/constants';
import { Appbar, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){}

  render() {
    let { list } = this.props;

    const coinList = list.map(function(item, index){
      let icon = null;

      if(item.type==='ethereum'){
        icon = require('cryptocurrency-icons/32/icon/eth.png');
      }

      return(
        <TouchableOpacity
          onPress={()=>alert(item.type)}
          style={styles.CardView}
          key={index}>
          <View
            style={styles.CardViewImage}>
            <Image
              source={icon} />
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>{item.type}</Text>
          </View>
        </TouchableOpacity>
      );
    })

    return(
      <View style={styles.View}>
      <Appbar.Header style={styles.ViewBar}>
        <Appbar.BackAction
        onPress={() => this.props.navigation.goBack()}/>
      </Appbar.Header>
        <View style={{padding: 10}}>
        {coinList}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: '#E9E9E9',
  },
  CardView:{
    flexDirection: 'row',
    backgroundColor:'white',
    padding:10,
    borderRadius: 10
  },
  CardViewImage:{
    paddingRight: 10,
  }
});

const mapStateToProps = state => ({
  list: state.states.list,
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
