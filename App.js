import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/pages/HomeScreen";
import MovieScreen from "./app/pages/MovieScreen";



const Stack = createNativeStackNavigator();

export default function App (){

  return(

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name = "home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name = "movies" component={MovieScreen}/>

    </Stack.Navigator>
    
    </NavigationContainer>
  )
}