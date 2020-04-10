/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR} from './../utils/constants';

import  Card  from './Card';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.actions.getAccount();
  }

  render() {
    let { authorised, uuid, state, wallets } = this.props;

    return(
      <View style={styles.View}>
        <View style={styles.HomeView}>
          <Card />
        </View>

        <View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
  },
  HomeView:{
    backgroundColor: PRIMARY_COLOR,
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
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
