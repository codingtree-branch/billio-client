import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeHeader from '../../components/home/HomeHeader';
import BillCard from '../../components/home/BillCard';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<HomeHeader />
			<ScrollView style={styles.scrollView}>
				<BillCard
					title="test"
					subtitle="what"
					imageUrl="https://media.istockphoto.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw="
					onPress={() => {}}
				/>
				<BillCard
					title="test"
					subtitle="what"
					imageUrl="https://media.istockphoto.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw="
					onPress={() => {}}
				/>
				<BillCard
					title="test"
					subtitle="what"
					imageUrl="https://media.istockphoto.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw="
					onPress={() => {}}
				/>
				<BillCard
					title="test"
					subtitle="what"
					imageUrl="https://media.istockphoto.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw="
					onPress={() => {}}
				/>
				<BillCard
					title="test"
					subtitle="what"
					imageUrl="https://media.istockphoto.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw="
					onPress={() => {}}
				/>
				<BillCard
					title="test"
					subtitle="what"
					imageUrl="https://media.istockphoto.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw="
					onPress={() => {}}
				/>
				<BillCard
					title="test"
					subtitle="what"
					imageUrl="https://media.istockphoto.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw="
					onPress={() => {}}
				/>
				<BillCard
					title="test"
					subtitle="what"
					imageUrl="https://media.istockphoto.com/id/1285504723/vector/receipt-of-sale.jpg?s=612x612&w=0&k=20&c=vCAuQvhBTFQEIwThmXNNuCyd-mjaIeME62KaSpehOCw="
					onPress={() => {}}
				/>
			</ScrollView>
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
	scrollView: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
	},
});
