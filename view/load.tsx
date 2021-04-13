import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../redux/action';
import Container from './../style/view';
import Logo from './../style/logo';
import { PRIMARY_COLOR } from './../redux/constants';

const Load = (Props) => {
    const {actions, account, navigation} = Props;

    useEffect(()=>{
      actions.getAccount();
      if(account){
        
      }else{
        navigation.navigate('Create')
      }
    },[])

    return(
      <Container background={PRIMARY_COLOR}>
        <Logo>ORBYT-WALLET</Logo>
      </Container>
    )
};

const mapStateToProps = state => ({
  account: state.states.account
});
  
const ActionCreators = Object.assign(
  {},
  Actions,
);
  
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Load)
