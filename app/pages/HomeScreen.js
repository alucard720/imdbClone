import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/Colors";
import GenreCard from "../components/GenreCard";
import ItemSeparator from "../components/ItemSeparator";
import MovieCard from "../components/MovieCard";
import { getNowMoviePlaying } from "../services/MovieService";

const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  const [activeGenre, setactivGenre] = useState("All");
  const [nowPlayingMovie, setNowPlayingMovie] = useState({});

  useEffect(() => {
    getNowMoviePlaying().then((movieResponse) =>
      setNowPlayingMovie(movieResponse.data)
    );
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={Colors.BASIC_BACKGROUND}
        translucent={false}
      />

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Now Playing</Text>
        <Text style={styles.headerSubTitle}> View All</Text>
      </View>

      <View style={styles.genreListContainer}>
        <FlatList
          data={Genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <ItemSeparator width={25} />}
          ListHeaderComponent={() => <ItemSeparator width={25} />}
          ListFooterComponentStyle={() => <ItemSeparator width={25} />}
          renderItem={({ item }) => (
            <GenreCard
              genreName={item}
              active={item === activeGenre ? true : false}
              onPress={setactivGenre}
            />
          )}
        ></FlatList>
      </View>

      <View>
        <FlatList
          data={nowPlayingMovie.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={25} />}
          ListHeaderComponent={() => <ItemSeparator width={25} />}
          ListFooterComponentStyle={() => <ItemSeparator width={25} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteCount={item.vote_count}
              voteAverage={item.vote_average}
              poster={item.poster_path}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  headerTitle: {
    color: "black",
    fontSize: 28,
  },
  headerSubTitle: {
    fontSize: 13,
    color: Colors.ACTIVE,
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});
export default HomeScreen;
