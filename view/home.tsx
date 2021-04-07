import React from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../redux/action';


const Home = (Props) => {
    console.log(Props)
    return(
        <View style={{flex: 1}}>
        </View>
    )
}

const mapStateToProps = state => ({
    authorised: state.states.auth
  });
  
  const ActionCreators = Object.assign(
    {},
    Actions,
  );
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)
