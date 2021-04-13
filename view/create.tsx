import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../redux/action';
import Container from '../style/view';
import Text from '../style/text';
import TextInput from '../style/input';
import Button from '../style/button';

const Create = (Props) => {
    const {actions, account, navigation} = Props;
    const [password, ChangePassword] = useState("");
    const [verify, Changeverify] = useState("");
    const [match, onMatch] = useState(true);

    const onChangePassword = (event) => {
        ChangePassword(event);
    }

    const onVerifyPassword = (event) => {
        if(password===event){
            onMatch(false);
        }else{
            onMatch(true);
        }
    }

    const onCreateAccount = () => {
        let data = {
            password: password
        }   
        actions.createAccount(data);
    }

    useEffect(()=>{
        actions.getAccount();
        if(account){
            navigation.navigate('Password')
        }else{
            console.log("no account", account)
        }
    },[])

    return(
        <Container background={"white"}>
            <Text>Hi, Welcome to orbyt.</Text>
            <Text>Please create password for you wallet</Text>

            <TextInput
                onChangeText={onChangePassword}
                secureTextEntry={true}
                placeholder={"password"}/>
            
            <TextInput
                onChangeText={onVerifyPassword}
                secureTextEntry={true}
                placeholder={"password"}/>
            
            <Button
                onPress={onCreateAccount}
                disabled={match}
                isDisabled={match}>
                    <Text>Done</Text>
            </Button>
        </Container>
    )
}

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
  
export default connect(mapStateToProps, mapDispatchToProps)(Create)
