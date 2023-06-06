import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./app/pages/HomeScreen";
import Feed from "./app/pages/Feed";
import Messages from "./app/pages/messages";
import Settings from "./app/pages/settings";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScren" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Feed") {
              iconName = "earth-outline";
            } else if (route.name === "Messages") {
              iconName = "chatbox";
            } else {
              iconName = "settings";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="News" component={Feed} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
