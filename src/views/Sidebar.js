import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'; 
import { Content, Container, Header, List, ListItem, Icon, Left, Body, Right, Badge, Button } from 'native-base';

import {Actions} from 'react-native-router-flux'   
 
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        spinner:false,
        //constant: require('../constant/constant'),
    }
  }
  
  _hola(data){
      alert('Hola Puta' + data);
  }
 
  render() { 
    let colors = require('../constant/colors') 
  
    return (
      <Content style={{ backgroundColor: '#FFFFFF' }}>
        <ScrollView >
 
        </ScrollView>

        <Content>
          <List>
            <ListItem icon onPress={() => Actions.home()}>
              <Left>
                <Icon name="ios-home" />
              </Left>
              <Body>
                <Text>Inicio</Text>
              </Body>
            </ListItem>

            <ListItem icon onPress={''}>
              <Left>
                <Icon ios="ios-contacts" android="md-contacts" />
              </Left>
              <Body>
                <Text>Contactos</Text>
              </Body>
            </ListItem> 
          </List>
        </Content>
      </Content>
    );
  }
}