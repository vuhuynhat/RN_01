

import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <View>

        <View style={Styles.Purple} >
          <Text>Purple :#C9C9FF</Text>
        </View>
        <View style={Styles.Blue} >
          <Text>Blue :#3D85C6</Text>
        </View>
        <View style={Styles.Green} >
          <Text>Green :#96CC96</Text>
        </View>
        <View style={Styles.Yellow} >
          <Text>Yellow :#F4B940</Text>
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  Purple:{
    flexDirection: 'row',
    backgroundColor: '#C9C9FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    fontWeight:'700',
    width:'90%',
    height:'22%',
  },
  Blue:{
    flexDirection: 'row',
    backgroundColor: '#3D85C6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    color: 'black',
    fontWeight:'700',
    width:'90%',
    height:'22%',
  },
  Green:{
    flexDirection: 'row',
    backgroundColor: '#96CC96',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    color: 'black',
    fontWeight:'700',
    width:'90%',
    height:'22%',
  },
  Yellow:{
    flexDirection: 'row',
    backgroundColor: '#F4B940',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    color: 'black',
    fontWeight:'700',
    width:'90%',
    height:'22%',
  },
})