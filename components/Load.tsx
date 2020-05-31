/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';
import { PRIMARY_COLOR } from './../utils/constants';

class Load extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.actions.getAccount();
  }

  componentDidMount(){

  }

  render(){
    let {authorised, uuid, state, error, errorMessage } = this.props;

    if(error){
      this.props.navigation.replace('Error');
    }

    if(authorised){
      this.props.navigation.replace('Home');
    }

    return(
      <View style={styles.View}>
        <Text style={styles.ViewText}>
          ORBYT WALLET
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
  },
  ViewText:{
    color: PRIMARY_COLOR,
    fontSize: 40,
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  authorised: state.states.authorised,
  state: state.states.state,
  wallets: state.states.wallets,
  uuid: state.states.uuid,
  error: state.states.error,
  errorMessage: state.states.errorMessage
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Load)
