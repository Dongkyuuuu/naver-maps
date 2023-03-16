import { match, P } from "ts-pattern";
import type { InstallOptions } from "utils";

export const installOptionsValidator = (options: InstallOptions) =>
  match(options)
    .with(
      P.not({ clientId: P.string }),
      () => "clientId must be included options"
    )
    .with(
      P.not({ category: P.optional(P.union("fin", "gov", "ncp")) }),
      () => "category must be fin,gov or ncp"
    )
    .with(
      P.optional({
        subModules: P.not(
          P.array(P.union("drawing", "geocoder", "panorama", "visualization"))
        ),
      }),
      () => "subModules is invalid"
    )
    .otherwise(() => undefined);
