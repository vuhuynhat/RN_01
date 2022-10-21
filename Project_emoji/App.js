import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './styles/styles'


export default class App extends Component {
  datas = [

    require("./acssets/image/angry.png"),
    require("./acssets/image/care.png"),
    require("./acssets/image/haha.png"),
    require("./acssets/image/like.png"),
    require("./acssets/image/love.png"),
    require("./acssets/image/sad.png"),

  ]

  state = {

    selected: require("./acssets/image/love.png"),
  }
  

  __onClickChangeImage = (data) => {
    this.setState({
      selected: data
    })


  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Bạn đang cảm thấy thế nào</Text>
        <Image style={styles.image} source={this.state.selected} />
        <View style={styles.iconslider}>
            {this.datas.map((data,index) =>(
              <TouchableOpacity onPress={() => { this.__onClickChangeImage(data) }}>
              <Image style={styles.icon}  source={data}/>
              </TouchableOpacity>
            ))}
          
        </View> 
      </View>
    )
  }
}