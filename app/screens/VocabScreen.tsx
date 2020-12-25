import React, { ReactElement, FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';

const VocabScreen: FC = (): ReactElement => {
	// declarations
	const [Title, setTitle] = useState<string>('Ejaan');

	//functions

	//render
	return (
		<View style={styles.container}>
			<Header title={Title} />
		</View>
	);
};

//StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
export default VocabScreen;
