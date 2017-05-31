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
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
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
    tabBarLabel: 'Notifications',

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
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

MyHomeScreen.navigationOptions = {
  title: 'My Chats',
  headerBackTitle: null,
  headerRight: true
};
MyNotificationsScreen.navigationOptions = {
  title: 'My Chats2',
};

export default MyApp;