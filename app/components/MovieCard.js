import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const MovieCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text>Movie</Text>
      </View>

      <View>
        <Text>Uri - Surgical Strike</Text>
        <View>
          <Text> Hindi | U/A</Text>
        </View>
        <View>
          <Text>90%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ACTIVE,
    height: 340,
    width: 230,
    borderRadius: 15,
    elevation: 7,
    marginVertical: 4,
    alignItems: "center",
  },
});
export default MovieCard;
