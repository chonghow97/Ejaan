import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Input from '../Base/Input';

interface Props {
	setToggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	search: string;
}

const SearchVocab: FC<Props> = ({
	setToggleSearch,
	setSearch,
	search,
}: Props) => {
	return (
		<View>
			<View style={{ flexDirection: 'row', marginBottom: 5 }}>
				<Button title="Back" onPress={() => setToggleSearch(false)} />
			</View>
			<View style={{ flexDirection: 'row', marginBottom: 5 }}>
				<Input
					value={search}
					onChangeText={(value) => setSearch(value)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
});

export default SearchVocab;
