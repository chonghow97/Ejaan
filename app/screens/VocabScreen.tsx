import React, { ReactElement, FC, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddVocab from '../components/Vocab/AddVocab';
import EditVocab from '../components/Vocab/EditVocab';
import List from '../components/Vocab/List';
import vocab from '../interface/vocab';
import Term from '../interface/Term';
import SearchVocab from '../components/Vocab/SearchVocab';

const VocabScreen: FC = (): ReactElement => {
	// declarations
	const [ToggleEdit, setToggleEdit] = useState(false);
	const [Vocab, setVocab] = useState<vocab[]>([
		{ id: uuidv4(), vocabA: 'Meja', vocabB: '桌子' },
		{ id: uuidv4(), vocabA: 'Kerusi', vocabB: '椅子' },
		{ id: uuidv4(), vocabA: 'Tetamu', vocabB: '客人' },
		{ id: uuidv4(), vocabA: 'Sampah', vocabB: '垃圾' },
	]);

	const [Term, setTerm] = useState<vocab>({
		id: '',
		vocabA: '',
		vocabB: '',
	});

	const [Search, setSearch] = useState<string>('');

	//functions
	const [ToggleSearch, setToggleSearch] = useState(false);
	const handleToggleSearch = (): void => setToggleSearch(true);

	const handleSearchFilter = (): vocab[] => {
		//idea by : https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
		let vocab = [...Vocab].sort((a, b) => (a.id > b.id ? 1 : -1));
		const filtered = vocab.filter((v) =>
			v.vocabA.toLowerCase().includes(Search.toLowerCase()),
		);
		return filtered;
	};
	handleSearchFilter();
	const validateEmpty = (text: string, message: string): boolean => {
		if (text === '') {
			Alert.alert('Error', message);
			return true;
		}
		return false;
	};

	const handleAddVocab = (Vocab: Term) => {
		const { a, b } = Vocab;
		if (validateEmpty(a, 'Term 1 cannot be empty')) return;
		const newVocab = { id: uuidv4(), vocabA: a, vocabB: b };
		setVocab((prev) => [newVocab, ...prev]);
	};

	const handleEditVocab = (id: string): void => {
		setToggleEdit(true);
		const verb = Vocab.find((v) => v.id === id);
		if (verb === undefined) throw new Error('id undefined');
		setTerm(verb);
	};

	const handlerUpdateVocab = (vocab: vocab): void => {
		if (validateEmpty(vocab.vocabA, 'Term 1 cannot be empty')) return;
		handleDeleteVocab(vocab.id);
		setVocab((prev) => [vocab, ...prev]);
		setToggleEdit(false);
	};

	const handleDeleteVocab = (id: string): void =>
		setVocab((prev) => prev.filter((item) => item.id != id));

	//render
	return (
		<View style={styles.container}>
			{ToggleEdit ? (
				<EditVocab
					toggleEdit={setToggleEdit}
					Vocab={Term}
					handlerUpdateVocab={handlerUpdateVocab}
					setTerm={setTerm}
				/>
			) : ToggleSearch ? (
				<SearchVocab
					setToggleSearch={setToggleSearch}
					setSearch={setSearch}
					search={Search}
				/>
			) : (
				<AddVocab
					handleAddVocab={handleAddVocab}
					toggleSearchVocab={handleToggleSearch}
				/>
			)}

			<FlatList
				data={handleSearchFilter()}
				renderItem={({ item }) => (
					<List
						vocab={item}
						deleteItem={handleDeleteVocab}
						editItem={handleEditVocab}
					></List>
				)}
			/>
		</View>
	);
};

//StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
});
export default VocabScreen;
