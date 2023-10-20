import { NaverMap } from "@naver-maps/react";
import type { PropsWithChildren } from "react";

export default function Map({ children }: PropsWithChildren) {
  return (
    <NaverMap style={{ width: "100%", height: "50vh" }} clientId="krm0ye8xno">
      {children}
    </NaverMap>
  );
}
