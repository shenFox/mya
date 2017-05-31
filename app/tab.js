import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Button,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
		title: '主页',
	  // header:null,
	  headerBackTitle: null,
	  headerRight: true
    // tabBarIcon: ({ tintColor }) => (
    //   <Image

    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

    render() {
  	const { navigate } = this.props.navigation;
    return (
		<View>
			<Text>Hello, Navigation!</Text>
			<Button
				onPress={() => navigate('Chat', { user: 'Lucy'})}
				title='Chat with Lucy'
			/>
		</View>
    )
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'list',

  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

class MyNotificationsScreen1 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'news',

  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

class MyNotificationsScreen2 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Me',

  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}



const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Notifications1: {
    screen: MyNotificationsScreen1,
  },
  Notifications2: {
    screen: MyNotificationsScreen2,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});



export default MyApp;