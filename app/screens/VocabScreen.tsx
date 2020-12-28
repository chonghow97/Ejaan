import React, { ReactElement, FC, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import List from '../components/Vocab/List';
import { Term, vocab } from '../interface/interface';
import { createVocabStore } from '../store/vocabStore';
import SearchVocab from '../components/Vocab/SearchVocab';
import AddVocab from '../components/Vocab/AddVocab';
import EditVocab from '../components/Vocab/EditVocab';

const dictionary = createVocabStore();

const VocabScreen: FC = (): ReactElement => {
	// declarations
	const [ToggleEdit, setToggleEdit] = useState(false);
	const [Vocab, setVocab] = useState<vocab[]>(dictionary.vocab(''));
	const [ToggleFav, setToggleFav] = useState(false);

	const [Term, setTerm] = useState<vocab>({
		id: '',
		vocabA: '',
		vocabB: '',
		isFav: false,
	});

	const [Search, setSearch] = useState<string>('');
	const [ToggleSearch, setToggleSearch] = useState(false);

	//functions
	const handleToggleSearch = (): void => setToggleSearch(true);
	const handleToggleFav = (id: string): void => {
		const newVocab = [...Vocab];
		const vocab = newVocab.find((vocab) => vocab.id === id);
		if (vocab === undefined) throw new Error('');
		vocab.isFav = !vocab.isFav;
		setVocab(newVocab);
	};

	const handleSearchFilter = (): vocab[] => {
		//idea by : https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
		//sort by timeline? in future
		// let vocab = [...Vocab].sort((a, b) => (a.id > b.id ? 1 : -1));
		let newVocab = [...Vocab];

		if (ToggleFav) newVocab = newVocab.filter((v) => v.isFav);
		const filteredVocab = newVocab.filter((v) =>
			v.vocabA.toLowerCase().includes(Search.toLowerCase()),
		);
		return filteredVocab;
	};
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
		const newVocab = { id: uuidv4(), vocabA: a, vocabB: b, isFav: false };
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
		const newVocab = [...Vocab];
		const TempVocab = newVocab.find((TempVocab) => vocab.id === vocab.id);
		if (TempVocab === undefined) throw new Error('');
		TempVocab.vocabA = vocab.vocabA;
		TempVocab.vocabB = vocab.vocabB;
		setVocab(newVocab);
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
					ToggleFav={ToggleFav}
					setToggleFav={setToggleFav}
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
						handleToggleFav={handleToggleFav}
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
