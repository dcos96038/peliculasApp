import {useRef} from "react";
import {Animated} from "react-native";

interface Props {
  initialValue: number;
}

const useFade = ({initialValue}: Props) => {
  const opacity = useRef(new Animated.Value(initialValue)).current;

  const fadeIn = (callback: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};

export default useFade;
