import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  ListView,
  StyleSheet,
  TabBarIOS,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import EpisodeItem from '../episode/EpisodeItem'

import fetchRSS from '../../api/fetchRSS'

export default class PodcastView extends Component {

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      episodes: null,
    };
    fetchRSS(this.props.podcast.feedURL).then((response) => {
      const episodes = response.responseData.feed.entries
      this.setState({
        episodes: ds.cloneWithRows(episodes),
      })
    })
  }

  renderEpisode(episode) {
    return (
      <EpisodeItem
        episode={episode}
      />
    )
  }

  renderEpisodes() {
    if (this.state.episodes) {
      return (
        <ListView
          style={styles.listViewStyle}
          dataSource={this.state.episodes}
          renderRow={this.renderEpisode.bind(this)}
        />
      )
    }
    return <Text>Nothing</Text>
  }

  render() {
    return (
      <View
        style={styles.listViewStyle}
        >
        {this.renderEpisodes()}
      </View>
    )
  }
}


const dimensions = Dimensions.get('window')

const styles = StyleSheet.create({
  listViewStyle: {
    marginTop: 33,
    height: dimensions.height,
  },
});
