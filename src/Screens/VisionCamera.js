import React from 'react';
import { Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import styles from './style';

function VisionCamera(props) {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  if (device == null) {
    return <Text>Loading</Text>;
  }
  return (
    <Camera
      style={styles.preview}
      device={device}
      isActive
      photo
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      {props.children}
    </Camera>
  );
}

export default VisionCamera;
