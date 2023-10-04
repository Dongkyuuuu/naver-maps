import type { InstallOptions } from "types";
import { validateInstallOptions } from ".";

const NAVER_MAP_SCRIPT_ID = "naver-maps-script-id";
const NAVER_MAP_SCRIPT_URL = "https://oapi.map.naver.com/openapi/v3/maps.js";

/** Install Naver Map Script */
export const handleInstallScript = ({
  clientId,
  category = "ncp",
  subModules = [],
  callback = [],
}: InstallOptions & { callback?: Array<() => void> }) => {
  const options = { clientId, category, subModules };
  const validateMessage = validateInstallOptions(options);
  const isExistScript = !!document.getElementById(NAVER_MAP_SCRIPT_ID);

  if (validateMessage) throw new Error(validateMessage);
  if (isExistScript) return;

  const query = new URLSearchParams({
    [`${options.category ?? "ncp"}ClientId`]: options.clientId,
    submodules: options.subModules?.join() ?? "",
  });
  const url = `${NAVER_MAP_SCRIPT_URL}?${query}`;

  const script = document.createElement("script");
  script.setAttribute("id", NAVER_MAP_SCRIPT_ID);
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", url);
  script.setAttribute("async", "");
  script.setAttribute("defer", "");
  script.onerror = () => new Error("naver map script load failed");
  script.onload = () => {
    if (callback) callback.forEach((cb) => cb());
  };
  document.head.appendChild(script);
};
