import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  AppRegistry,
  Platform,
} from 'react-native'

import OpenCV from '../../NativeModules/OpenCV'
console.log('OpenCV:', OpenCV)
console.log('Return from testMethod:', OpenCV.testMethod())


export default class CvImageManipulations extends Component {
  constructor (props) {
    super(props)
    // const {CvCamera, CvInvokeGroup, CvInvoke, CvType, Mat} = OpenCV
    let {height, width} = Dimensions.get('window')
    this.cvCameraRef = React.createRef()
    this.state = {
      scroll: {
        top: height - 94,
        left: width - 64,
      },
      window: {width, height},
    }
  }

  componentDidMount = async () => {
    // const interMat = await new OpenCV.Mat().init()

    this.setState({...this.state, })//interMat: interMat})
  }

  onFrameSize = async e => {
    if (
      !this.state.frameWidth &&
      !this.state.frameHeight &&
      !this.state.fillMat
    ) {
      const {frameWidth, frameHeight} = JSON.parse(
        Platform.OS === 'ios' ? e.nativeEvent.payload : e.payload,
      ).framesize

      let fillMat
      // if (Platform.OS === 'ios') {
      //   fillMat = await new OpenCV.Mat(frameHeight, frameWidth, OpenCV.CvType.CV_8UC4).init()
      // } else {
      //   fillmat = await new OpenCV.Mat(frameWidth, frameHeight, OpenCV.CvType.CV_8UC4).init()
      // }
    }
  }

  // renderCamera = () => {
  //   return (
  //     <OpenCV.CvCamera
  //       ref={this.cvCameraRef}
  //       style={{width: '100%', height: '100%', position: 'absolute'}}
  //     />
  //   )
  // }

  render () {
    const {interMat} = this.state

    return (
      <View>
        {/* {this.renderCamera()} */}
        <Text>Hello world</Text>
        {/* <OpenCV.CvInvokeGroup groupid='invokegroup0'>
        </OpenCV.CvInvokeGroup> */}
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
})

AppRegistry.registerComponent(
  'CvImageManipulations',
  () => CvImageManipulations,
)
