import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
} from 'react-native';

interface ICameraScan {
  setScanEnable: (val: boolean) => void;
}

export default function CameraScan({ setScanEnable }: ICameraScan) {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [hasLibraryPermission, setHasLibraryPermission] = useState<
    boolean | null
  >(null);
  const [photoBox, setPhotoBox] = useState<string | null>(null);

  const cameraRef = useRef<Camera>(null);

  const getLibraryPermissions = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    setHasLibraryPermission(status === 'granted');
    const { assets } = await MediaLibrary.getAssetsAsync({
      first: 1,
      sortBy: MediaLibrary.SortBy.creationTime,
      mediaType: MediaLibrary.MediaType.photo,
    });
    if (assets.length > 0) {
      setPhotoBox(assets[0].uri);
    }
  };
  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    if (hasPermission === null) {
      requestCameraPermission();
    }
    if (hasLibraryPermission === null) {
      getLibraryPermissions();
    }
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    alert('No Camera Access. Camera Access Needed to Scan');
  }
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        if (hasLibraryPermission) {
          // Save the photo with MediaLibrary
          const asset = await MediaLibrary.createAssetAsync(uri);
          await MediaLibrary.createAlbumAsync('YourAlbumName', asset, false);
        }
      } catch (error) {
        console.error('Error taking picture', error);
      }
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPressOut={() => setScanEnable(false)}>
            <FontAwesome name="close" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.text}>Scan Receipt</Text>
        </View>
        <Camera style={styles.camera} type={type} ref={cameraRef} ratio="16:9">
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
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <MaterialIcons name="flip-camera-ios" size={50} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cameraButtonOutter}
              onPress={takePicture}
            >
              <View style={styles.cameraButtonInner}></View>
            </TouchableOpacity>
            {photoBox ? (
              <TouchableOpacity onPress={toggleCameraType}>
                <Image source={{ uri: photoBox }} style={styles.thumbnail} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.photos}
                onPress={toggleCameraType}
              ></TouchableOpacity>
            )}
          </View>
        </Camera>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginBottom: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  camera: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  topOverlay: {
    paddingTop: 12,
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
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  cameraButtonOutter: {
    borderRadius: 500,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 2,
    borderWidth: 1,
    alignItems: 'center',
  },
  cameraButtonInner: {
    borderRadius: 500,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 35,
    borderWidth: 2,
    alignItems: 'center',
  },
  photos: {
    border: 1,
    alignSelf: 'center',
    backgroundColor: '#474747',
    borderRadius: 5, // Optional, for rounded corners
    padding: 30,
    margin: 10,
    marginRight: 0,
  },
  thumbnail: {
    width: 60, // Adjust the size as needed
    height: 60, // Adjust the size as needed
    borderRadius: 5, // Optional, for rounded corners
    margin: 10,
    marginRight: 0,
  },
  button: {
    padding: 10,
    alignSelf: 'center',
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
