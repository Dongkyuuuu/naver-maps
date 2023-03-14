import { PropsWithChildren } from "react";
import { installOptionsValidator } from "validator";
import { createScript } from "utils";

import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

import type { ScriptInstallOptions } from "types";

interface Props extends PropsWithChildren {
  options: ScriptInstallOptions;
}

export default function Provider({ children, options }: Props) {
  const validation = installOptionsValidator(options);
  if (validation) throw new Error(validation);

  useIsomorphicLayoutEffect(() => {
    createScript(options);
  }, []);

  return <>{children}</>;
}
