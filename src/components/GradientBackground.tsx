import React, {useContext, useEffect} from "react";
import {Animated, StyleSheet, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {GradientContext} from "../context/GradientContext";
import useFade from "../hooks/useFade";

interface Props {
  children: React.ReactNode;
}

const GradientBackground = ({children}: Props) => {
  const {colours, prevColours, setMainPrevColours} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade({initialValue: 0});

  useEffect(() => {
    fadeIn(() => {
      setMainPrevColours(colours);
      fadeOut(0);
    }); //eslint-disable-next-line
  }, [colours]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColours.primary, prevColours.secondary, "white"]}
        end={{x: 0.5, y: 0.7}}
        start={{x: 0.1, y: 0.1}}
        style={{...StyleSheet.absoluteFillObject}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colours.primary, colours.secondary, "white"]}
          end={{x: 0.5, y: 0.7}}
          start={{x: 0.1, y: 0.1}}
          style={{...StyleSheet.absoluteFillObject}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
