import ImageColors from "react-native-image-colors";

export const getImageColours = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});

  let primary: string | undefined;
  let secondary: string | undefined;

  if (colors.platform === "android") {
    primary = colors.dominant;
    secondary = colors.average;
  }

  if (colors.platform === "ios") {
    primary = colors.primary;
    secondary = colors.secondary;
  }

  return [primary, secondary];
};
