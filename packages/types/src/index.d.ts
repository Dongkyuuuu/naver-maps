export type SubModules = "panorama" | "geocoder" | "drawing" | "visualization"; // NaverMap SubModul Options
export type InstallCategory = "gov" | "ncp" | "fin";

/** Script install options */
export interface ScriptInstallOptions {
  clientId: string;
  category?: InstallCategory;
  subModules?: SubModules[];
}
