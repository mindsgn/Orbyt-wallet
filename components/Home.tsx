/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {NativeModules, View, StyleSheet, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR} from './../utils/constants';

import  Card  from './Card';

const { HelloWorld } = NativeModules;

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    //this.props.actions.getAccount();
    try {
      const message = await HelloWorld.sayHello();
        alert(message);
    } catch(e) {
      alert(e);
    }
  }

  render() {
    let { authorised, uuid, state, wallets } = this.props;

    return(
      <View style={styles.View}>
        <View style={styles.HomeView}>
          <Card />
        </View>

        <View style={styles.HomeView2}>
          <View style={styles.HomeCards}>
            <View>
              <Text style={styles.HomeCardsText}>Investments</Text>
            </View>
            <View>
              <Text>Invest in Enviroment with blockchain</Text>
            </View>
            <View>
            <Button
              title={'Go To'}/>
            </View>
          </View>

          <View style={styles.HomeCards}>
            <View>
              <Text style={styles.HomeCardsText}>Settings</Text>
            </View>
            <View>
              <Text></Text>
            </View>
            <View>
            <Button
              onPress={()=> this.props.navigation.navigate('Settings')}
              title={'Go To Settings'}/>
            </View>
          </View>

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
  HomeView:{
    backgroundColor: PRIMARY_COLOR,
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  HomeView2:{
    padding: 10,
  },
  HomeCards:{
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
    padding: 20,
  },
  HomeCardsText:{
    color: 'black',
  }
});

const mapStateToProps = state => ({
  authorised: state.states.authorised,
  state: state.states.state,
  wallets: state.states.wallets,
  uuid: state.states.uuid
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
