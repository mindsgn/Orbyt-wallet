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
import SVGImage from 'react-native-svg-image';
import ImageSVG from './../assets/undraw_faq_rjoy.svg';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <View style={styles.View}>
        <View>
        </View>
        <View>
          <Text>There seems to be a problem!.</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  View:{
    flex:1,
    padding: 10,
    justifyContent:'center',
    alignItems:'center'
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
