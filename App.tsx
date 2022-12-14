import "react-native-gesture-handler";

import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";

import StackNavigator from "./src/navigator/StackNavigator";
import {GradientProvider} from "./src/context/GradientContext";

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <StackNavigator />
      </GradientProvider>
    </NavigationContainer>
  );
};

export default App;
