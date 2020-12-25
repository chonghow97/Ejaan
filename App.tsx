import React, { useState, FC } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';
import CounterScreen from './app/screens/CounterScreen';

const App: FC = () => {
	//state
	const { landscape } = useDeviceOrientation();
	const [Count, setCount] = useState<number>(1);

	//function
	function handlerCount() {
		setCount((prev) => prev + 1);
	}
	return (
		<View style={styles.container}>
			<CounterScreen count={Count} handler={handlerCount} />
		</View>
	);
};

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
	},
});

export default App;
