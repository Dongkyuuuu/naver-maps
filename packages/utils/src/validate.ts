import { match, P } from "ts-pattern";
import type { InstallOptions } from "types";

/** Before install script, check options value */
export const validateInstallOptions = (options: InstallOptions) => {
  return match(options)
    .with(P.not({ clientId: P.string }), () => "clientId is required")
    .with(
      P.not({ category: P.optional(P.union("fin", "gov", "ncp")) }),
      () => "only fin, gov, ncp is allowed",
    )
    .with(
      P.optional({
        subModules: P.not(
          P.array(P.union("drawing", "geocoder", "panorama", "visualization")),
        ),
      }),
      () => "subModules is invalid",
    )
    .otherwise(() => undefined);
};
