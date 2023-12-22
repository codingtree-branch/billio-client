import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '../../components/Themed';
import HomeHeader from '../../components/home/HomeHeader';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<HomeHeader />
			<Text style={styles.title}>Welcome to Billio!</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
