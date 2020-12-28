import React, { FC } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Input from '../Base/Input';

interface Props {
	setToggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	search: string;
	ToggleFav: boolean;
	setToggleFav: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchVocab: FC<Props> = ({
	setToggleSearch,
	setSearch,
	search,
	ToggleFav,
	setToggleFav,
}: Props) => {
	return (
		<View>
			<View>
				<View>
					<TouchableOpacity>
						<Text
							style={styles.back}
							onPress={() => setToggleSearch(false)}
						>
							Back
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<Input
					value={search}
					onChangeText={(value) => setSearch(value)}
				/>
			</View>
			<TouchableOpacity style={styles.filter}>
				<Text
					style={[
						{
							backgroundColor: ToggleFav ? 'orange' : 'grey',
							color: ToggleFav ? 'black' : 'white',
						},
						styles.filterText,
					]}
					onPress={() => setToggleFav(!ToggleFav)}
				>
					Favorite
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	back: {
		padding: 5,
		fontSize: 15,
		borderWidth: 1,
		marginBottom: 5,
		width: 50,
		textAlign: 'center',
		borderRadius: 5,
	},
	container: {
		padding: 20,
	},
	filter: {
		marginBottom: 5,
	},
	filterText: {
		width: 100,
		fontSize: 16,
		textAlign: 'center',
		padding: 5,
		borderRadius: 5,
	},
});

export default SearchVocab;
