import React, { ReactElement } from 'react';
import { StyleSheet, TextInput } from 'react-native';
interface Props {
	placeholder?: string;
	value?: string;
	onChangeText?: ((text: string) => void) | undefined;
}

function Input({
	placeholder = 'Placeholder',
	value,
	onChangeText,
}: Props): ReactElement {
	return (
		<TextInput
			placeholder={placeholder}
			style={styles.input}
			onChangeText={onChangeText}
			value={value}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#f8f8f8',
		flex: 1,
		height: 50,
		padding: 8,
		fontSize: 16,
		marginBottom: 5,
		marginRight: 5,
		color: '#000',
	},
});

export default Input;
