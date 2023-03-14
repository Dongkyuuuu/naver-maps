import { PropsWithChildren } from "react";
import { installOptionsValidator } from "validator";

import { InstallContext } from "@/hooks/useInstall";

import type { ScriptInstallOptions } from "types";

interface Props extends PropsWithChildren {
  options: ScriptInstallOptions;
}

export default function Provider({ children, options }: Props) {
  const validation = installOptionsValidator(options);
  if (validation) throw new Error(validation);

  return (
    <InstallContext.Provider value={options}>
      {children}
    </InstallContext.Provider>
  );
}
