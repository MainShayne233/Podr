import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  ListView,
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';

import FavoritesIndex from './FavoritesIndex'

export default class FavoritesTab extends Component {

  render() {
    return (
      <NavigatorIOS
       ref='nav'
        initialRoute={{
          component: FavoritesIndex,
          title: 'Index',
        }}
        style={styles.nav}
      />
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    flex: 1
  },
});
