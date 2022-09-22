import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

import {Cast} from "../interfaces/creditsInterface";

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri}} style={{width: 50, height: 50, borderRadius: 10}} />
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: "bold"}}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
    marginLeft: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
  },
});
