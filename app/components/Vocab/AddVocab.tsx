import React, { ReactElement, useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Term from '../../interface/Term';
interface Props {
	handleAddVocab: (Vocab: Term) => void;
}

const AddVocab = ({ handleAddVocab }: Props): ReactElement => {
	const [Term, setTerm] = useState<Term>({ a: '', b: '' });

	const onChangeA = (text: string) =>
		setTerm((prev) => {
			return { a: text, b: prev.b };
		});
	const onChangeB = (text: string) =>
		setTerm((prev) => {
			return { a: prev.a, b: text };
		});

	return (
		<View style={styles.container}>
			<View style={styles.InputContainer}>
				<TextInput
					placeholder="Term 1"
					style={[styles.input]}
					onChangeText={onChangeA}
				/>
				<TextInput
					placeholder="Term 2"
					style={[styles.input]}
					onChangeText={onChangeB}
				/>
			</View>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => handleAddVocab(Term)}
			>
				<Text style={[styles.buttonText]}>
					<Icon name="plus" size={20} />
					Add Vocab
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	InputContainer: {
		flexDirection: 'row',
	},
	input: {
		backgroundColor: '#f8f8f8',
		height: 50,
		padding: 8,
		fontSize: 16,
		marginBottom: 5,
		marginRight: 5,
		flex: 1,
	},
	btn: {
		backgroundColor: '#c2bad8',
		padding: 9,
		margin: 5,
	},
	buttonText: {
		textAlign: 'center',
		color: 'darkslateblue',
		fontSize: 16,
	},
});
export default AddVocab;
