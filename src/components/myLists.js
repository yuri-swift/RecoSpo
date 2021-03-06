import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';


export default class MyLists extends Component {
  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.centering}>
          <Text style={styles.txt}>MyLists</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: 'orange',
  },
  centering: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 20,
  },
});
