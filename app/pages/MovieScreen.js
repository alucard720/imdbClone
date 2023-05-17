import React from 'react'
import {  StyleSheet, Text, View, StatusBar } from 'react-native'


const MovieScreen = () => {
  return (
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})

export default MovieScreen
