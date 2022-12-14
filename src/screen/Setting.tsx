/** @format */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Font from '../constants/Font'

const Setting = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={[styles.centerView]}>
        <Text style={[styles.text]}>Setting</Text>
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: Font.acmeRegular,
    color: 'rgb(256, 256, 256)',
  },
})
