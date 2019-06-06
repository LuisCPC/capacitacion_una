import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  }, 
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },    items: {
    paddingVertical: 15,
    paddingLeft: 20,
    marginTop: 5
},
itemSelected:{
    borderLeftWidth: 5,
    borderColor: 'red'
},
noSelectedItems: {
    paddingVertical: 15,
    paddingLeft: 25,
    marginTop: 5
}
});

export default function Menu({ onItemSelected }) {
    
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>User name</Text>
      </View>

      <Text
        onPress={() => onItemSelected('Home')}
        style={styles.item}
        style={[styles.items, styles.itemSelected]}
      >
        Home
      </Text>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={[styles.items, styles.noSelectedItems]}
      >
        Contacts
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};