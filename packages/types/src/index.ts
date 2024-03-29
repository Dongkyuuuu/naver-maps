export type SubModules = "panorama" | "geocoder" | "drawing" | "visualization"; // NaverMap SubModul Options
export type InstallCategory = "gov" | "ncp" | "fin";

/** Script install options */
export interface InstallOptions {
  clientId: string;
  category?: InstallCategory;
  subModules?: SubModules[];
}

export type Layers =
  | "BACKGROUND"
  | "BACKGROUND_DETAIL"
  | "BICYCLE"
  | "CADASTRAL"
  | "CTT"
  | "HIKING_TRAIL"
  | "PANORAMA"
  | "POI_KOREAN"
  | "TRANSIT"
  | "KOREAN"
  | "ENGLISH"
  | "CHINESE"
  | "JAPANESE";

export interface MapOptions extends naver.maps.MapOptions {
  latitude?: number;
  longitude?: number;
}

export type NaverMapFunction = (map: naver.maps.Map) => void;
