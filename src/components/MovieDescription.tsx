import React from "react";
import {Text, View, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {Cast} from "../interfaces/creditsInterface";
import {FullMovieDetails} from "../interfaces/movieInterface";

import CastItem from "./CastItem";

interface Props {
  fullMovieDetails: FullMovieDetails;
  cast: Cast[];
}

const MovieDescription = ({fullMovieDetails, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Icon color="grey" name="star-outline" size={14} />
          <Text style={{marginLeft: 5}}>{fullMovieDetails.vote_average}</Text>
          <Text> - {fullMovieDetails.genres.map((g) => g.name).join(", ")}</Text>
        </View>
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: "bold", color: "black"}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{fullMovieDetails.overview}</Text>
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: "bold", color: "black"}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>
          $ {fullMovieDetails.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </Text>

        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: "bold", color: "black"}}>
            Actores
          </Text>
          <FlatList
            data={cast}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, height: 70}}
          />
        </View>
      </View>
    </>
  );
};

export default MovieDescription;
