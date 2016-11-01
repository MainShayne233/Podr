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

export default class EpisodeItem extends Component {

  handlePress() {

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
            {this.props.episode.title}
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
    fontSize: 20,
    borderColor: 'rgb(23, 65, 43)',
  },
});
