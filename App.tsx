import React, { FC, createContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './app/components/Base/Header';
import VocabScreen from './app/screens/VocabScreen';

const App: FC = () => {
	return (
		<View style={styles.container}>
			<Header title="Ejaan" />
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
