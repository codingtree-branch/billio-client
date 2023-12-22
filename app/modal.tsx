import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

import { Text } from '../components/Themed';

export default function ModalScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Modal</Text>
			<View style={styles.separator} />
			<Text style={styles.body}>Modal Body</Text>

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	body: {
		fontSize: 16,
		fontWeight: 'normal',
	},
});
