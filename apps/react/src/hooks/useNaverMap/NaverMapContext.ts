import { createContext } from "react";

export const NaverMapContext = createContext<naver.maps.Map | undefined>(
  undefined
);
