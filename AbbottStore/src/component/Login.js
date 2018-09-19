import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {View, Container, Text, Header, Content, Form, Item, Input, Button, Label } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    flex: 0.9,
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default class Login extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <Container>
          <Header>
            <Text>
                Login Page
            </Text>
          </Header>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
            <View padder style={styles.buttons}>
              <Button
                rounded
                light
                style={styles.button}
                onPress={() =>
                  navigate('Home', { name: 'Jane' })}>
                <Text> Login </Text>
              </Button>
              <Button rounded light onPress>
                <Text> Forgot Password </Text>
              </Button>
            </View>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}
