import { useNaverMap } from "@/hooks/useNaverMap";
import { useEffect, useRef, useState } from "react";
import type { PropsWithChildren, HTMLAttributes } from "react";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  onLoaded?: (marker: naver.maps.Marker) => void;
  latitude: number;
  longtitude: number;
}

export default function Marker({
  children,
  onLoaded,
  latitude,
  longtitude,
  ...props
}: Props) {
  const { mapIsLoaded, getNaverMap } = useNaverMap();
  const markerDiv = useRef(null);
  const [marker, setMarker] = useState<naver.maps.Marker>();

  const useInitMarker = () => {
    if (!markerDiv.current) return;

    const init = new window.naver.maps.Marker({
      map: getNaverMap,
      position: new window.naver.maps.LatLng(latitude, longtitude),
      icon: children
        ? {
            content: markerDiv.current,
          }
        : undefined,
    });
    setMarker(init);
    onLoaded && onLoaded(init);
  };

  useEffect(() => {
    if (!mapIsLoaded) return;
    useInitMarker();

    return () => {
      marker?.setMap(null);
      setMarker(undefined);
    };
  }, [mapIsLoaded]);
  return (
    <div style={{ display: "none" }}>
      <div ref={markerDiv} {...props}>
        {children}
      </div>
    </div>
  );
}
