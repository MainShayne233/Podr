import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  TabBarIOS,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import fetchRSS from '../api/fetchRSS'

export default class PodcastItem extends Component {

  handlePress() {
    fetchRSS(this.props.podcast.feedURL).then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <View
        style={styles.row}
        >
        <TouchableOpacity
          onPress={this.handlePress.bind(this)}
          >
          <Text
            style={styles.text}
            >
            {this.props.podcast.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    borderColor: 'rgb(23, 65, 43)',
  },
});
