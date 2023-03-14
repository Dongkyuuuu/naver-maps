import { createContext } from "react";
import type { ScriptInstallOptions } from "types";

export const InstallContext = createContext<ScriptInstallOptions>({
  clientId: "",
});
