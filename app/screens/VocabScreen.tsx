import React, { ReactElement, FC, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddVocab from '../components/Vocab/AddVocab';
import Header from '../components/Vocab/Header';
import List from '../components/Vocab/List';
import vocab from '../interface/vocab';
import Term from '../interface/Term';

const VocabScreen: FC = (): ReactElement => {
	//debug

	// declarations
	const [Title] = useState<string>('Ejaan');
	const [Vocab, setVocab] = useState<vocab[]>([
		{ id: uuidv4(), vocabA: 'Meja', vocabB: '桌子' },
		{ id: uuidv4(), vocabA: 'Kerusi', vocabB: '椅子' },
		{ id: uuidv4(), vocabA: 'Tetamu', vocabB: '客人' },
		{ id: uuidv4(), vocabA: 'Sampah', vocabB: '垃圾' },
	]);

	//functions
	const DeleteVocab = (id: string): void => {
		setVocab((prev) => prev.filter((item) => item.id != id));
	};

	const handleAddVocab = (Vocab: Term) => {
		if (Vocab.a === '') {
			Alert.alert('Error', 'term 1 cannot be null');
			return;
		}
		setVocab((prev) => [
			{ id: uuidv4(), vocabA: Vocab.a, vocabB: Vocab.b },
			...prev,
		]);
	};
	//render
	return (
		<View style={{ flex: 1 }}>
			<Header title={Title} />
			<View style={styles.container}>
				<AddVocab handleAddVocab={handleAddVocab} />
				<FlatList
					data={Vocab}
					renderItem={({ item }) => (
						<List vocab={item} deleteItem={DeleteVocab}></List>
					)}
				/>
			</View>
		</View>
	);
};

//StyleSheet
const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
});
export default VocabScreen;
