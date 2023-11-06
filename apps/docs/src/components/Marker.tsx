/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NaverMarker } from "@naver-maps/react";
import type { PropsWithChildren } from "react";

export default function Map({ children }: PropsWithChildren) {
  return (
    <NaverMarker latitude={37.51347} longitude={127.041722}>
      {/* @ts-ignore */}
      {children ?? null}
    </NaverMarker>
  );
}
