import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
	const { landscape } = useDeviceOrientation();
	let state = {
		Counter: 1,
	};
	return (
		<View style={styles.container}>
			<Text>Hello World {state.Counter}</Text>
			<Button title="Click me" onPress={() => state.Counter++}></Button>
		</View>
	);
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
	},
});
