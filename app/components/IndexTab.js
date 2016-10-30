import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';

import podcasts from '../api/podcasts'

export default class IndexTab extends Component {

  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    console.log(podcasts)
    this.state = {
      dataSource: ds.cloneWithRows(podcasts()),
    };
  }

  render() {
    return (
      <View>
        <Text>
          Index Tab
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}
