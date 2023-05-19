import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import IMAGES from "../constants/Images";

const MovieCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <Image source={IMAGES.IMDB} resizeMode="cover" />
        </View>
      </View>

      <View style={styles.movieTitle} numberOfLines={3}>
        <Text>Uri - Surgical Strike Uri</Text>

        <View style={styles.movieSubTitleContainer}>
          <Text> Hindi | U/A</Text>

          <View style={styles.rowAndCenter}>
            <Ionicons
              name="heart"
              size={20}
              color={Colors.HEART}
              style={{ marginRight: 5 }}
            />
            <Text>90%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    height: 340,
    width: 230,
    borderRadius: 15,
    elevation: 7,
    marginVertical: 4,
    alignItems: "center",
  },

  movieTitle: {
    paddingVertical: 2,
    marginTop: 5,
    color: Colors.GRAY,
    width: 230,
  },
  movieSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieSubTitle: {
    fontSize: 12,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default MovieCard;
