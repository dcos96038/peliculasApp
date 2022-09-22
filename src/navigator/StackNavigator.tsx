import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import {Movies} from "../interfaces/movieInterface";

export type RootStackParams = {
  Home: undefined;
  Details: Movies;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={DetailScreen} name="Details" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
