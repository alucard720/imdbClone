import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import IMAGES from "../constants/Images";

const MovieCard = ({
  title,
  poster,
  voteCount,
  release,
  language,
  voteAverage,
}) => {
  const [liked, setLiked] = useState(false);

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
        <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={25}
            color={liked ? Colors.HEART : Colors.WHITE}
            style={{ position: "absolute", bottom: 10, left: 10 }}
          />
        </TouchableNativeFeedback>
      </View>

      <View style={styles.movieTitle} numberOfLines={3}>
        <Text>{title}</Text>

        <View style={styles.movieSubTitleContainer}>
          <Text> {language}</Text>

          <View style={styles.rowAndCenter}>
            <Ionicons
              name="heart"
              size={20}
              color={Colors.HEART}
              style={{ marginRight: 5 }}
            />
            <Text>92%</Text>
          </View>
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
    paddingVertical: 8,
    alignContent: "flex-end",
    paddingLeft: 150,
  },
  tmdbRating: {
    fontSize: 12,
    color: Colors.YELLOW,
    paddingHorizontal: 5,
  },
  tmdbHeart: {
    flexDirection: "column",
  },
});
export default MovieCard;
