import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native-web";

const NewsFeedCard = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getNews = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=10d51466ea7d4047a56472d23d78785a"
      );
      const MyNews = await res.json();
      setNews(MyNews.articles);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNews(isLoading);
  }, []);

  return (
    <FlatList
      data={news}
      keyExtractor={(Item, index) => index}
      renderItem={({ item, index }) => {
        return (
          <ScrollView>
            <View style={styles.container}>
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: "100%", height: 240, borderRadius: 20 }}
              />
            </View>
            <View>
              <Text
                style={styles.text}
                onPress={() => {
                  Linking.openURL(item.url);
                }}
              >
                {item.title}
              </Text>
            </View>
          </ScrollView>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 240,
    marginBottom: 18,
    backgroundColor: "#eee",
    borderRadius: 24,
    marginHorizontal: 16,
    elevation: 3,
  },
  imageContainer: { flex: 1 },
  image: {
    flex: 1,
    borderRadius: 24,
    height: 300,
  },
  titleContainer: {
    marginTop: 15,
    bottom: -50,
    position: "absolute",
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
    marginLeft: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    color: "black",
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
