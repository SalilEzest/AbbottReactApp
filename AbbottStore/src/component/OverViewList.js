import React, {Component} from 'react';
import {Image} from 'react-native';
import {Container, Content, Header, Footer, Text, Body, Title} from 'native-base';
import {SafeAreaView, StyleSheet} from 'react-native';

const styles=StyleSheet.create({
  image: {
      flex:1,
      height:120,
      width:120,
      alignItems: 'center',
      justifyContent:'center',
    }
})
export default class OverViewList extends Component {
  static navigationOptions = {
    title: 'Detail Page'
  };
  render(){
    return(
      <Container>
        <Content >
        <Image
         style={styles.image}
         source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
        <Content padder>
        <Text >
          This is detail page
        </Text>
        </Content>
        </Content>
      </Container>
    )
  }
}
