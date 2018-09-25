import React,{ Component } from 'react';
import { Container,Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class Home extends Component {
  render(){
    return(
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text>A</Text>
            </Button>
            <Button>
              <Text>B</Text>
            </Button>
            <Button>
              <Text>C</Text>
            </Button>
            <Button>
              <Text>D</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
