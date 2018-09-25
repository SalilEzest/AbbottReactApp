import React,{ Component } from 'react';
import { Container,Header, Content, Footer, FooterTab, Button, Icon, Text, Card, CardItem, Right, Title } from 'native-base';
import { createStackNavigator } from 'react-navigation'
export default class Home extends Component {
  static navigationOptions = {
  title: 'Product List',
  };
  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
        <Content>
          <Card>
              <CardItem button onPress={()=>navigate('overViewList')}>
                <Icon active name="logo-googleplus"/>
                <Text>Google Plus</Text>
                <Right>
                </Right>
               </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>

              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>

            </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>

              </Right>
             </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>

            </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>

            </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>

              </Right>
             </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>

            </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>

            </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>

              </Right>
             </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>

            </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>

            </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon active name='apps'
                    onPress={()=> navigate('overViewList')}/>
            </Button>
            <Button>
            <Icon name="person"
                  onPress={()=> navigate('productLists')}/>
            </Button>
            <Button>
               <Icon name="navigate"
               onPress={()=> navigate('overViewList')}/>
            </Button>
            <Button>
              <Icon name='camera'
              onPress={()=> navigate('productLists')}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
