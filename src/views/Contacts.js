import React, { Component } from "react";
import { View, FlatList, ActivityIndicator,StatusBar } from "react-native";
import { Container, Header, Icon,Content, List, ListItem,Separator, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import colors from '../constant/colors'  
import { Actions } from "react-native-router-flux";
//import Modals from 'react-native-modal'; 
//import modals from '../styles/default/modals';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() { 
    this.makeRemoteRequest(); 
  }

  makeRemoteRequest = () => { 
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=50`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => { 
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };


  render(){
    let backColor = colors.nadvar
    return(

      <Container>
        <StatusBar
          backgroundColor={colors.statusBar}
        />
        <Header searchBar hasTabs style={{ backgroundColor: backColor }} androidStatusBarColor={colors.statusBar} iosBarStyle='default'>
          <Left>
              <Button transparent onPress={() => Actions.pop()}>
                  <Icon name='arrow-left' />
              </Button>
          </Left> 
          <Body></Body>

          <Right/>
        </Header>
          
        <Content>
          <Separator bordered>
            <Text>Contacts</Text>
          </Separator>
          <List> 
              <FlatList
                  data={this.state.data}
                  renderItem={({ item }) => (
                    
                      <ListItem thumbnail>
                          <Left>
                              <Thumbnail square source={{ uri: item.picture.thumbnail }} />
                          </Left>
                          <Body>
                              <Text>{`${item.name.first} ${item.name.last}`}</Text>
                              <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                          </Body>
                          <Right>
                            <Button transparent>
                              <Text>View</Text>
                            </Button>
                          </Right>
                      </ListItem>

                  )}
                  //keyExtractor={item => item.email}
                  ItemSeparatorComponent={this.renderSeparator}
                  //ListHeaderComponent={this.renderHeader}
                  ListFooterComponent={this.renderFooter}
                  onRefresh={this.handleRefresh}
                  refreshing={this.state.refreshing}
                  onEndReached={this.handleLoadMore}
                  onEndReachedThreshold={50}
                  />
          </List>

      </Content>
    </Container>
    ); 
  }

}

export default Contacts;