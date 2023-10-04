import type { MapOptions, Layers } from "types";

const LAYER_MAP = {
  BACKGROUND: "bg",
  BACKGROUND_DETAIL: "ol",
  BICYCLE: "br",
  CADASTRAL: "lp",
  CTT: "ctt",
  HIKING_TRAIL: "ar",
  PANORAMA: "pr",
  POI_KOREAN: "lko",
  TRANSIT: "ts",
  KOREAN: "lko",
  ENGLISH: "len",
  CHINESE: "lzh",
  JAPANESE: "lja",
};

export const getMapSettings = (
  mapOptions?: MapOptions,
  initLayers?: Layers[],
) => {
  const options = mapOptions ?? {};
  const layers = initLayers ?? [];
  const overlayType = layers.map((layer) => LAYER_MAP[layer]).join(".");

  if (options.latitude && options.longitude) {
    options.center = new window.naver.maps.LatLng(
      options.latitude,
      options.longitude,
    );
  }

  return {
    ...options,
    mapTypes: new window.naver.maps.MapTypeRegistry({
      normal: window.naver.maps.NaverStyleMapTypeOptions.getNormalMap({
        overlayType: overlayType,
      }),
      satellite: window.naver.maps.NaverStyleMapTypeOptions.getSatelliteMap({
        overlayType: overlayType,
      }),
      hybrid: window.naver.maps.NaverStyleMapTypeOptions.getHybridMap({
        overlayType: overlayType,
      }),
      terrain: window.naver.maps.NaverStyleMapTypeOptions.getTerrainMap({
        overlayType: overlayType,
      }),
    }),
  };
};
