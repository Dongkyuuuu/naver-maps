import { NaverMap } from "@naver-maps/react";
import type { PropsWithChildren } from "react";

export default function Map({ children }: PropsWithChildren) {
  return (
    <NaverMap
      style={{ width: "100%", height: "50vh" }}
      mapOptions={{
        latitude: 37.51347,
        longitude: 127.041722,
        zoom: 14,
      }}
      clientId="krm0ye8xno"
    >
      {children}
    </NaverMap>
  );
}
