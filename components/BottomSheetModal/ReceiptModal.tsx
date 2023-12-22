import { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

import CameraScan from './CameraScan';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ReceiptModal() {
  const [scanEnable, setScanEnable] = useState(false);

  const handleScanReceipt = () => {
    setScanEnable(true);
  };

  const handleUploadReceipt = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleScanReceipt}>
          <Text style={styles.text}>Scan a receipt</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleUploadReceipt}>
          <Text style={styles.text}>Upload a reciept</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleScanReceipt}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={scanEnable} animationType="slide" transparent>
        <CameraScan setScanEnable={setScanEnable} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    height: '25%',
    bottom: 1,
    padding: 24,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    gap: 15,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
