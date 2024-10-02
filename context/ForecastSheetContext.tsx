import { Children, createContext, useContext } from "react";

import { SharedValue, useSharedValue } from "react-native-reanimated";

interface ForecastSheetProviderProps {
  children: React.ReactNode;
}

const ForecastSheetContext = createContext<SharedValue<number> | null>(null);

export const ForecastSheetProvider = ({
  children,
}: ForecastSheetProviderProps) => {
  const animatedPosition = useSharedValue(0);

  return (
    <ForecastSheetContext.Provider value={animatedPosition}>
      {children}
    </ForecastSheetContext.Provider>
  );
};

export const useForecastSheetPosition = (): SharedValue<number> => {
  const context = useContext(ForecastSheetContext);
  if (context === null) {
    throw new Error(
      "useForecastSheetPosition must be used within a Forecast Sheet Provider"
    );
  } else {
    return context;
  }
};
