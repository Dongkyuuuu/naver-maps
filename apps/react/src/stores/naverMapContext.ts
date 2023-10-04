import { createContext } from "react";

type NaverMapContextType = {
  mapIsLoaded: boolean;
  map?: naver.maps.Map;
};

export const NaverMapContext = createContext<NaverMapContextType>({
  map: undefined,
  mapIsLoaded: false,
});
