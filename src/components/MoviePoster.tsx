import {useNavigation} from "@react-navigation/native";
import {Image, StyleSheet, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

import {Movies} from "../interfaces/movieInterface";

interface Props {
  movie: Movies;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{width, height, marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 10}}
      onPress={() => navigation.navigate("Details", movie)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "black",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
