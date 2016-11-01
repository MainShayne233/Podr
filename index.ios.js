/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';

import FavoritesTab from './app/components/favorites/FavoritesTab'
import SearchTab from './app/components/search/SearchTab'

export default class Podr extends Component {

  state = {
    selectedTab: 'favorites',
    notifCount: 0,
    presses: 0,
  };


  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === 'favorites'}
          onPress={() => {
            this.setState({
              selectedTab: 'favorites',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <FavoritesTab/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
            this.setState({
              selectedTab: 'search',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <SearchTab/>
        </TabBarIOS.Item>
      </TabBarIOS>
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
});

AppRegistry.registerComponent('Podr', () => Podr);
