export type SubModules = "panorama" | "geocoder" | "drawing" | "visualization"; // NaverMap SubModul Options
export type InstallCategory = "gov" | "ncp" | "fin";

/** Script install options */
export interface InstallOptions {
  clientId: string;
  category?: InstallCategory;
  subModules?: SubModules[];
}

export const useNaverMapScript = () => {
  const SCRIPT_ID = "naver-maps-script-id";

  const handleCreateScript = (options: InstallOptions) => {
    const isExistScript = document.getElementById(SCRIPT_ID);
    if (isExistScript) return;

    const query = new URLSearchParams({
      [`${options.category ?? "ncp"}ClientId`]: options.clientId,
      submodules: options.subModules?.join() ?? "",
    });
    const url = `https://openapi.map.naver.com/openapi/v3/maps.js?${query}`;

    const script = document.createElement("script");
    script.setAttribute("id", SCRIPT_ID);
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    script.setAttribute("async", "");
    script.setAttribute("defer", "");

    script.onerror = () => new Error("naver map script is not loaded");

    document.head.appendChild(script);
  };

  const callbackAfterScriptLoaded = (callback: () => void) => {
    const script = document.getElementById(SCRIPT_ID);
    if (!script) throw new Error("naver map script is not loaded");

    script.onload = () => callback();
  };

  return {
    handleCreateScript,
    callbackAfterScriptLoaded,
  };
};
