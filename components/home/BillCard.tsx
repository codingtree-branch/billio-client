import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type BillCardProps = {
	title: string;
	subtitle: string;
	imageUrl: string;
	onPress: () => void;
};

const BillCard = ({ title, subtitle, imageUrl, onPress }: BillCardProps) => {
	return (
		<View style={styles.cardContainer}>
			<Image source={{ uri: imageUrl }} style={styles.imageThumbnail} />
			<View style={styles.textContainer}>
				<Text style={styles.titleText}>{title}</Text>
				<Text style={styles.subtitleText}>{subtitle}</Text>
			</View>
			<TouchableOpacity onPress={onPress} style={styles.arrowButton}>
				<Text style={styles.arrowText}>{'>'}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 25,
		marginHorizontal: 40,
		marginVertical: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	imageThumbnail: {
		width: 50,
		height: 50,
		borderRadius: 4,
		marginRight: 16,
	},
	textContainer: {
		flex: 1,
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	subtitleText: {
		fontSize: 14,
		color: 'gray',
	},
	arrowButton: {},
	arrowText: {
		fontSize: 24,
		color: 'gray',
	},
});

export default BillCard;
