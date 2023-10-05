import { provide, inject, Ref } from "vue";
import { NAVER_MAP_INJECT_KEY } from "@/constants";

interface NaverMapInject {
  mapIsLoaded?: Ref<boolean>;
  map?: Ref<naver.maps.Map | undefined>;
}

export const useNaverMap = () => {
  const getNaverMap = () =>
    inject<NaverMapInject>(NAVER_MAP_INJECT_KEY, {
      mapIsLoaded: undefined,
      map: undefined,
    });
  const setNaverMap = (value: NaverMapInject) => {
    provide<NaverMapInject>(NAVER_MAP_INJECT_KEY, value);
  };

  return {
    getNaverMap,
    setNaverMap,
  };
};
