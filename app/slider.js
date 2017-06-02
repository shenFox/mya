import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;

export default class Slider extends React.Component {
	constructor(props) {
    super(props);
    this.state = { showText: true };
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    return (
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} height={150} showsPagination={true} >
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    // flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    // flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    // flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})