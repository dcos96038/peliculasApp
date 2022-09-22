import React from "react";
import {View, Text, FlatList} from "react-native";

import {Movies} from "../interfaces/movieInterface";

import MoviePoster from "./MoviePoster";

interface Props {
  moviesData: Movies[];
  title?: string;
}

const HorizontalSlider = ({moviesData, title}: Props) => {
  return (
    <View style={{height: !!title ? 260 : 220}}>
      {title && <Text style={{fontSize: 30, fontWeight: "bold", marginLeft: 10}}>{title}</Text>}
      <FlatList
        data={moviesData}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <MoviePoster height={200} movie={item} width={140} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
