import { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

import CameraScan from './CameraScan';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IReceiptModal {
  setToggleModal: (val: boolean) => void;
}
export default function ReceiptModal({ setToggleModal }: IReceiptModal) {
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
        <TouchableOpacity onPress={() => setToggleModal(false)}>
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
    flexDirection: 'column',
    paddingVertical: 12,
    paddingHorizontal: 36,
    justifyContent: 'center',
    backgroundColor: 'inherit',
    gap: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
