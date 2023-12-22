import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';

import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ICameraScan {
  setScanEnable: (val: boolean) => void;
}

export default function CameraScan({ setScanEnable }: ICameraScan) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    alert('No Camera Access. Camera Access Needed to Scan');
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <FontAwesome name="close" size={24} color="white" />
        <Text style={styles.text}>Scan Receipt</Text>
      </View>
      <Camera style={styles.camera} type={type} ref={cameraRef} ratio="16:9">
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <MaterialIcons name="flip-camera-ios" size={50} color="white" />
        </TouchableOpacity>
        <View style={styles.overlay}>
          <View style={styles.topOverlay} />
          <View style={styles.middleOverlay}>
            <View style={styles.sideOverlay} />
            <View style={styles.box} />
            <View style={styles.sideOverlay} />
          </View>
          <View style={styles.bottomOverlay} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={toggleCameraType}
          >
            <MaterialCommunityIcons name="line-scan" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  topOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  middleOverlay: {
    flexDirection: 'row',
    flex: 3,
  },
  bottomOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  sideOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
  },
  boxContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    aspectRatio: 1,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 40,
  },
  cameraButton: {
    borderRadius: 500,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
  },
  button: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
