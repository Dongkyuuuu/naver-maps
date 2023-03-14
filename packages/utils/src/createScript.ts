import { scriptInstallOptionsValidate } from "validator";
import type { ScriptInstallOptions } from "types";

export const createScript = (options: ScriptInstallOptions) => {
  const validation = scriptInstallOptionsValidate(options);
  if (validation) throw new Error(validation);

  const query = new URLSearchParams({
    [`${options.category ?? "ncp"}ClientId`]: options.clientId,
    submodules: options.subModules?.join() ?? "",
  });
  const url = `https://openapi.map.naver.com/openapi/v3/maps.js?${query}`;

  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", url);
  script.setAttribute("async", "");
  script.setAttribute("defer", "");

  script.onerror = () => new Error("naver map script is not loaded");

  document.head.appendChild(script);
};
