import React, { Component } from 'react';
import { Container, Header, Input, Footer, Item, Button, Icon, Text, Badge, Fab, Tabs, List, ListItem, Left, Right, Body, Title, Content } from 'native-base';
import {
  ListView,
  FlatList,
  Platform,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,  
  Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

import { Actions, NavigationBar } from 'react-native-router-flux'

 
 
import colors from '../constant/colors'  
 
 
const Slider = props => ( <View style={styles.container}>
  <Image style={styles.image} source={props.uri}/>
</View>
)

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading:true,
      spinner:false,
      searVisible:false,
      search:'', 
      imagesSlider: [
        require('../img/1.jpg'),
        require('../img/2.jpg'),
        require('../img/3.jpg')
    ]
    }
  }

  componentDidMount() { 
  }
  
 
 
  
  render() {
    let backColor = colors.nadvar
 
    return (
      <Container>
        <StatusBar
          backgroundColor={colors.statusBar}
        />
        <Header searchBar hasTabs style={{ backgroundColor: backColor }} androidStatusBarColor={colors.statusBar} iosBarStyle='default'>
            <Left>
                <Button transparent onPress={() => this.props.openDrawer()}>
                    <Icon name='menu' />
                </Button>
            </Left> 
            <Body></Body>

            <Right/>
        </Header>
        <Content>
          <View style={{flex:1}}>
            <Swiper
                autoplay
                height={240}
            >
            {
                this.state.imagesSlider.map((item, i) => <Slider 
                    uri={item}
                    key={i}
                />)
            }

            </Swiper>
          </View>
        </Content>
         
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }, 
  image: {
    flex: 1,
    width
  }
});