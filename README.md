Bringing CSS Like Classes to React Native.

## Getting Started

```js
import ThemeProvider, { Text, View } from 'react-native-classes';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	heading: {
		color: '#333',
		fontSize: 20,
	},
	main: {
		backgroundColor: '#EFEFEF',
		marginVertical: 30,
		padding: 10,
	},
	screen: {
		marginTop: 35,
	},
	'text-bold': {
		fontWeight: 'bold',
	},
});

export default class App extends React.Component {
	render() {
		return (
			<ThemeProvider styles={styles}>
				<View className="screen">
					<Text className="text-bold">Open up App.js to start working on your app!</Text>
					<View className="main">
						<Text className="heading">Hello World!</Text>
					</View>
				</View>
			</ThemeProvider>
		);
	}
}
```
