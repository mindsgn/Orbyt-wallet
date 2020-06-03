/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//screens
import React from 'react';
import {StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../utils/actions';

import {PRIMARY_COLOR} from './../utils/constants';
import { Appbar } from 'react-native-paper';

const Navbar =({title, goBack})=>{
    return(
      <Appbar.Header style={styles.View}>
        <Appbar.BackAction
          onPress={goBack}/>
        <Appbar.Content
          title={title}/>
      {/*s<Appbar.Content
        title="Title"
        subtitle="Subtitle"
      />
      <Appbar.Action icon="magnify" onPress={this._handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />*/}
    </Appbar.Header>
    );
};

const styles = StyleSheet.create({
  View:{
    backgroundColor: PRIMARY_COLOR
  }
});

const mapStateToProps = state => ({
  authorised: state.states.authorised,
  state: state.states.state,
  wallets: state.states.wallets,
  uuid: state.states.uuid,
  balance: state.states.balance,
});

const ActionCreators = Object.assign(
  {},
  Actions,
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
