import { NaverMapContext } from "@/stores/naverMapContext";
import { useContext, useMemo } from "react";

export const useNaverMap = () => {
  const naverMap = useContext(NaverMapContext);

  return useMemo(() => naverMap, [naverMap]);
};
