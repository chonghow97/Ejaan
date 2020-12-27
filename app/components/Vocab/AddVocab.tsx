import React, { ReactElement, useState, FC } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Term from '../../interface/Term';
import Input from '../Base/Input';
interface Props {
	handleAddVocab: (Vocab: Term) => void;
	toggleSearchVocab: () => void;
}

const AddVocab: FC<Props> = ({
	handleAddVocab,
	toggleSearchVocab,
}: Props): ReactElement => {
	const [Term, setTerm] = useState<Term>({ a: '', b: '' });

	const onChangeA = (text: string) =>
		setTerm((prev) => ({ ...prev, a: text }));

	const onChangeB = (text: string) =>
		setTerm((prev) => ({ ...prev, b: text }));

	return (
		<View style={styles.container}>
			<View style={styles.InputContainer}>
				<Input placeholder="Term 1" onChangeText={onChangeA} />
				<Input placeholder="Term 2" onChangeText={onChangeB} />
			</View>
			<TouchableOpacity style={styles.btn}>
				<Text
					style={[styles.buttonText]}
					onPress={() => toggleSearchVocab()}
				>
					<Icon name="plus" size={20} />
					Search Vocab
				</Text>
				<Text
					style={[styles.buttonText]}
					onPress={() => handleAddVocab(Term)}
				>
					<Icon name="plus" size={20} />
					Vocab
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
	btn: {
		flexDirection: 'row',
	},
	buttonText: {
		backgroundColor: '#c2bad8',
		paddingTop: 10,
		paddingBottom: 10,
		marginLeft: 10,
		textAlign: 'center',
		color: 'darkslateblue',
		fontSize: 16,
		flex: 1,
	},
});
export default AddVocab;
