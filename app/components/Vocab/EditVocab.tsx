import React, { ReactElement, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import vocab from '../../interface/vocab';
import Input from '../Base/Input';

interface Props {
	toggleEdit: React.Dispatch<React.SetStateAction<boolean>>;
	Vocab: vocab;
	handlerUpdateVocab: (vocab: vocab) => void;
	setTerm: any;
}

function EditVocab({
	setTerm,
	toggleEdit,
	Vocab,
	handlerUpdateVocab,
}: Props): ReactElement {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Input
					onChangeText={(text) =>
						setTerm((prev: vocab) => ({ ...prev, vocabA: text }))
					}
					value={Vocab.vocabA}
				/>
				<Input
					onChangeText={(text) =>
						setTerm((prev: vocab) => ({ ...prev, vocabB: text }))
					}
					value={Vocab.vocabB}
				/>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Button
					title="Done"
					onPress={() => handlerUpdateVocab(Vocab)}
				></Button>
				<Button
					title="Cancel"
					onPress={() => toggleEdit(false)}
				></Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	btn: {
		flex: 1,
	},
});
export default EditVocab;
