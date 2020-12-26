import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';
interface Props {
	title: String;
}

const Header = ({ title = 'AppName' }: Props): ReactElement => {
	return (
		<View style={styles.container}>
			<Text style={styles.Text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { height: 60, padding: 15, backgroundColor: 'darkslateblue' },
	Text: {
		color: 'white',
		fontSize: 23,
		textAlign: 'center',
	},
});
export default Header;
