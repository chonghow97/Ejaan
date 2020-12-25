import React, { ReactElement, useState } from 'react';
import Vocab from '../../interface/vocab';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Modal,
	Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
	vocab: Vocab;
	deleteItem: (id: string) => void;
}

function List({ vocab, deleteItem }: Props): ReactElement {
	//declaration
	const [ModalVisible, setModalVisible] = useState(false);
	//destructors
	const { vocabA, vocabB, id } = vocab;

	//interface, enum

	//function

	//render
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<Text style={[styles.text, styles.fontSize, { flex: 2 }]}>
					{vocabA}
				</Text>
				<Text style={[styles.text, styles.fontSize]}>{vocabB}</Text>
				<Icon
					name="pencil"
					color="orange"
					style={[styles.fontSize, styles.Icon]}
					onPress={() => Alert.prompt('Test')}
				/>
				<Icon
					name="remove"
					color="firebrick"
					style={[styles.fontSize, styles.Icon]}
					onPress={() => deleteItem(id)}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	Icon: {
		paddingTop: 4,
		marginLeft: 20,
	},
	container: {
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 5,
		paddingRight: 20,
		backgroundColor: '#f8f8f8',
		borderBottomWidth: 1,
		borderColor: '#eee',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	fontSize: {
		fontSize: 20,
	},
	text: {
		flex: 1,
		marginLeft: 30,
		fontSize: 20,
	},
});
export default List;
