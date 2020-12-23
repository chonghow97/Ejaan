import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
	const { landscape } = useDeviceOrientation();
	return (
		<View
			style={{
				backgroundColor: '#fff',
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
				flexWrap: 'wrap',
			}}
		>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					flexBasis: 100, //width
					// width: 100,
					height: 100,
				}}
			></View>
			<View
				style={{
					backgroundColor: 'gold',
					width: 100,
					height: 100,
				}}
			></View>
			<View
				style={{
					backgroundColor: 'tomato',
					width: 100,
					height: 100,
				}}
			></View>
			<View
				style={{
					backgroundColor: 'grey',
					width: 100,
					height: 100,
				}}
			></View>
			<View
				style={{
					backgroundColor: 'greenyellow',
					width: 100,
					height: 100,
				}}
			></View>
		</View>
	);
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
