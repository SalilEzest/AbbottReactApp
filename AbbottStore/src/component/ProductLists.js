import React,{Component} from 'react';
import { View, Text } from 'native-base';
import {SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default class ProductLists extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>ProductLists</Text>
      </View>
    )
  }
}
