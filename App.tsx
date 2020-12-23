import React from 'react';
import {
	StyleSheet,
	Dimensions,
	SafeAreaView,
	Button,
	Alert,
	StatusBar,
	View,
	Platform,
} from 'react-native';

import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
	const { landscape } = useDeviceOrientation();
	return (
		<SafeAreaView style={[containerStyle, styles.container]}>
			<View
				style={{
					backgroundColor: 'dodgerblue',
					width: '100%',
					height: landscape ? '100%' : '30%',
				}}
			></View>
		</SafeAreaView>
	);
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
