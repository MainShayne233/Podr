import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  ListView,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';

import PodcastItem from './PodcastItem'

import podcasts from '../api/podcasts'

export default class IndexTab extends Component {

  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(podcasts()),
    };
  }

  renderPodcastItem(podcast) {
    return (
      <PodcastItem
        podcast={podcast}
      />
    )
  }

  render() {
    return (
      <View
        style={styles.listViewStyle}
        >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderPodcastItem}
        />
      </View>
    )
  }
}


const dimensions = Dimensions.get('window')

const styles = StyleSheet.create({
  listViewStyle: {
    height: dimensions.height,
  },
});
