import React, { Component } from 'react';
import CameraScreen from './src/Screens/CameraScreen';
import CvImageManipulations from './src/containers/CvImageManipulations'

export default class App extends Component {
  render() {
    return (
      <CvImageManipulations />
      // <CameraScreen />
    );
  }
}

