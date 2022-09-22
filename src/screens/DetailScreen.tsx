import {StackScreenProps} from "@react-navigation/stack";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import MovieDescription from "../components/MovieDescription";
import useMovieDetails from "../hooks/useMovieDetails";
import {RootStackParams} from "../navigator/StackNavigator";

const windowHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, "Details"> {}

const DetailScreen = ({route, navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const {isLoading, cast, fullMovieDetails} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subTitle}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator color="grey" size={35} style={{marginTop: 20}} />
      ) : (
        <MovieDescription cast={cast} fullMovieDetails={fullMovieDetails!} />
      )}
      <TouchableOpacity
        style={{...styles.backButton, marginTop: top}}
        onPress={() => navigation.pop()}
      >
        <Icon color="white" name="arrow-back-outline" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: windowHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
  imageBorder: {
    flex: 1,
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    opacity: 0.8,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  backButton: {
    position: "absolute",
    zIndex: 999,
    elevation: 9,
  },
});
