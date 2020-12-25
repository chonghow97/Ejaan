import React, { useState, FC } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import VocabScreen from './app/screens/VocabScreen';

const App: FC = () => {
	//declarations

	//function

	//render
	return (
		<View style={styles.container}>
			<VocabScreen />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
	},
});

export default App;
