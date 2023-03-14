import { useContext, useMemo } from "react";
import { NaverMapContext } from ".";

export default function useNaverMap() {
  const naverMap = useContext(NaverMapContext);

  const mapIsLoaded = useMemo(() => (naverMap ? true : false), [naverMap]);
  const getNaverMap = useMemo(() => naverMap, [naverMap]);

  if (naverMap === undefined) {
    throw new Error("map instance is undefined");
  }

  return {
    mapIsLoaded,
    getNaverMap,
  };
}
