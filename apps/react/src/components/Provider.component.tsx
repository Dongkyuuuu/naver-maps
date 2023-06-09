import { PropsWithChildren } from "react";
import { installOptionsValidator } from "validator";
import { useNaverMapScript } from "utils";

import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import type { InstallOptions } from "types";
interface Props extends PropsWithChildren {
  options: InstallOptions;
}

export default function Provider({ children, options }: Props) {
  const { handleCreateScript } = useNaverMapScript();

  const validation = installOptionsValidator(options);
  if (validation) throw new Error(validation);

  useIsomorphicLayoutEffect(() => {
    handleCreateScript(options);
  }, []);

  return <>{children}</>;
}
