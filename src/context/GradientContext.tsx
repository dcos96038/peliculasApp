import React, {createContext, useState} from "react";

interface ImageColours {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colours: ImageColours;
  prevColours: ImageColours;
  setMainColours: (colours: ImageColours) => void;
  setMainPrevColours: (colours: ImageColours) => void;
}

export const GradientContext = createContext({} as ContextProps); // TODO Definir Tipo

export const GradientProvider = ({children}: {children: React.ReactNode}) => {
  const [colours, setColours] = useState<ImageColours>({
    primary: "transparent",
    secondary: "transparent",
  });

  const [prevColours, setPrevColours] = useState<ImageColours>({
    primary: "transparent",
    secondary: "transparent",
  });

  const setMainColours = (colours: ImageColours) => {
    setColours(colours);
  };

  const setMainPrevColours = (colours: ImageColours) => {
    setPrevColours(colours);
  };

  return (
    <GradientContext.Provider
      value={{
        colours,
        prevColours,
        setMainColours,
        setMainPrevColours,
      }}
    >
      {children}
    </GradientContext.Provider>
  );
};
