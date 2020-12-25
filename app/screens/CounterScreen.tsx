import React, { ReactElement } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface Props {
	count: number;
	handler: () => void;
}

function CounterScreen({ count, handler }: Props): ReactElement {
	return (
		<View style={styles.container}>
			<Text>Counter : {count}</Text>
			<Button title="press Me" onPress={handler}></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
	},
});

export default CounterScreen;
