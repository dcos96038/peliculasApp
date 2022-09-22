import {useContext, useEffect} from "react";
import {ActivityIndicator, Dimensions, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

import GradientBackground from "../components/GradientBackground";
import HorizontalSlider from "../components/HorizontalSlider";
import MoviePoster from "../components/MoviePoster";
import {GradientContext} from "../context/GradientContext";
import {getImageColours} from "../helpers/getColours";
import useMovies from "../hooks/useMovies";

const windowWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const {nowPlaying, topRated, upcoming, popular, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColours} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = "green", secondary = "orange"] = await getImageColours(uri);

    setMainColours({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              inactiveSlideOpacity={0.9}
              itemWidth={300}
              renderItem={({item}) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              onSnapToItem={(index) => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider moviesData={topRated} title="Popular Movies" />
          <HorizontalSlider moviesData={popular} title="Top Rated Movies" />
          <HorizontalSlider moviesData={upcoming} title="Upcoming Movies" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
