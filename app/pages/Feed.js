import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getNews from "../services/NewsfeedService";
import NewsFeedCard from "../components/NewsFeedCard";
const Feed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getNews();
  });

  return (
    <View style={styles.container}>
      <NewsFeedCard />
    </View>
  );
};

const boxShadow = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: { elevation: 6 },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Feed;
