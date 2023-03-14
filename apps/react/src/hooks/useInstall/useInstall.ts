import { useContext, useMemo } from "react";
import { InstallContext } from ".";

export default function useInstall() {
  const install = useContext(InstallContext);
  const getInstallOptions = useMemo(() => install, [install]);

  return {
    getInstallOptions,
  };
}
