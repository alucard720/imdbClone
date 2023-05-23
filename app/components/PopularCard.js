import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";
import IMAGES from "../constants/Images";
import { Ionicons } from "@expo/vector-icons";

const PopularCard = (title, poster, voteCount, language, voteAverage) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={IMAGES.TMDB}
            resizeMode="cover"
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.tmdbRating}>{voteAverage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
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
  logo: {
    flexDirection: "row",
    paddingVertical: 22,
    alignContent: "flex-end",
    paddingLeft: 175,
  },
  tmdbRating: {
    fontSize: 12,
    color: Colors.YELLOW,
    paddingHorizontal: 5,
  },
});
export default PopularCard;
