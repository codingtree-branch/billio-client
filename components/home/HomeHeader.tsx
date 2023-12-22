import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from '../../components/Themed';

const HomeHeader = () => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.title}>Recently Added</Text>
			<TouchableOpacity
				onPress={() => {
					/* handle navigation or action */
					alert('see all!');
				}}
			>
				<Text style={styles.link}>See all</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		paddingVertical: 10,
		paddingHorizontal: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	link: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default HomeHeader;
