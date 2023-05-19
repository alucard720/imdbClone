import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const movies = ["recent movies"];

const MovieScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Movie</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieScreen;
