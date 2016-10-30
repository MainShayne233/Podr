/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';

import IndexTab from './app/components/IndexTab'
import SearchTab from './app/components/SearchTab'

export default class Podr extends Component {

  state = {
    selectedTab: 'index',
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
          selected={this.state.selectedTab === 'index'}
          onPress={() => {
            this.setState({
              selectedTab: 'index',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <IndexTab/>
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
