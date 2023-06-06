import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NewsFeedCard = ({ title, author, url, urlToImage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 240,
    marginBottom: 18,
    backgroundColor: "#eee",
    borderRadius: 24,
    marginHorizontal: 16,
  },
  imageContainer: { flex: 1 },
  image: {
    flex: 1,
    borderRadius: 24,
    height: 300,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    color: "#fff",
    paddingBottom: 24,
  },
  timestamp: {
    position: "absolute",
    color: "#eee",
    fontSize: 12,
    fontWeight: "300",
    right: 16,
    bottom: 8,
  },
});
export default NewsFeedCard;
