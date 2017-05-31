import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import MyApp from './tab.js';

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//     headerBackTitle: null,
//     headerRight:true
//   };
//   render() {
//   	const { navigate } = this.props.navigation;
//     return (
// 		<View>
// 			<Text>Hello, Navigation!</Text>
// 			<Button
// 				onPress={() => navigate('Chat', { user: 'Lucy'})}
// 				title='Chat with Lucy'
// 			/>
// 		</View>
//     )
//   }
// }

class ChatScreen extends React.Component{
	static navigationOptions = ({ navigation }) => ({
		title: `Chat with ${navigation.state.params.user}`,
		headerBackTitle: null,
	});
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View>
				<Text>Chat with {params.user}</Text>
			</View>
		);
	}
}







const App = StackNavigator({
  Home: { screen: MyApp },
  Chat: { screen: ChatScreen },
});

export default App






















