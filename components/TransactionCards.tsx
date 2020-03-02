import React from 'react';
import { View, Text } from 'react-native';

class TransactionCArd extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <View>
      <View>
        <Icon name="rocket" size={21} color="#07877D" />
      </View>
      <View>
        <Text>{this.props.date}</Text>
      </View>
      <View>
      </View>
    </View>
  )};
}

export default TransactionCArd;
