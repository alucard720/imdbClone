import React from 'react'
import { ScrollView,  StyleSheet, Text , View} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Colors from '../../constants/Colors'


const HomeScreen = () => {
  return (
 <ScrollView contentContainerStyle={styles.container}>
<StatusBar style="light" backgroundColor={Colors.BASIC_BACKGROUND} translucent={false}/>
 
<View>
<Text> Now Playing</Text>
<Text></Text>
</View>
<Text>Home Screen</Text>



 </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors.BASIC_BACKGROUND,
    },
})



export default HomeScreen
