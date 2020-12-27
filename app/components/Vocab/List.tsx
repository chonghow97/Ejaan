import React, { ReactElement, useState, FC } from 'react';
import Vocab from '../../interface/vocab';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Modal,
	Alert,
	Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
	vocab: Vocab;
	deleteItem: (id: string) => void;
	editItem: (id: string) => void;
}

const List: FC<Props> = ({
	vocab,
	deleteItem,
	editItem,
}: Props): ReactElement => {
	//declaration
	const [ModalVisible, setModalVisible] = useState(false);
	//destructors
	const { vocabA, vocabB, id } = vocab;

	//interface, enum

	//function

	//render
	return (
		<TouchableOpacity onLongPress={() => editItem(id)}>
			<View style={styles.container}>
				<Text style={[styles.text, styles.fontSize, { flex: 3 }]}>
					{vocabA}
				</Text>
				<Text style={[styles.text, styles.fontSize]}>{vocabB}</Text>
				<Icon
					name="remove"
					color="firebrick"
					style={[styles.fontSize, styles.Icon]}
					onPress={() => deleteItem(id)}
				/>
			</View>
		</TouchableOpacity>
	);
};

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
		fontSize: 15,
	},
	text: {
		flex: 1,
		marginLeft: 30,
	},
});
export default List;
