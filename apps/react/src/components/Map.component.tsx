import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { createScript } from "utils";
import type { PropsWithChildren } from "react";

export default function Map({ children }: PropsWithChildren) {
  useIsomorphicLayoutEffect(() => {
    createScript();
  }, []);

  return <div>{children}</div>;
}
