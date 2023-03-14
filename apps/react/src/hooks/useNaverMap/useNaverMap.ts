import { useContext, useMemo } from "react";
import { NaverMapContext } from ".";

export default function useNaverMap() {
  const naverMap = useContext(NaverMapContext);

  const mapIsLoaded = useMemo(() => (naverMap ? true : false), [naverMap]);
  const getNaverMap = useMemo(() => naverMap, [naverMap]);

  return {
    mapIsLoaded,
    getNaverMap,
  };
}
