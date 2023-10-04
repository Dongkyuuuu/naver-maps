import { useNaverMap } from "@/hooks/useNaverMap";
import {
  useRef,
  type HTMLAttributes,
  type PropsWithChildren,
  useState,
  useEffect,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onLoaded?: (marker: naver.maps.Marker) => void;
  latitude: number;
  longitude: number;
}

export default function Marker({
  onLoaded,
  latitude,
  longitude,
  children,
  ...props
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement>(null);
  const [marker, setMarker] = useState<naver.maps.Marker>();
  const { map, mapIsLoaded } = useNaverMap();

  const handleCreateMarker = (map: naver.maps.Map) => {
    if (!ref.current) throw new Error("marker ref is not founded");

    const markerInstance = new naver.maps.Marker({
      map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: children
        ? {
            content: ref.current,
          }
        : undefined,
    });
    setMarker(() => markerInstance);
    onLoaded && onLoaded(markerInstance);
  };

  useEffect(() => {
    if (mapIsLoaded && map) handleCreateMarker(map);
  }, [mapIsLoaded]);

  useEffect(() => {
    return () => {
      marker?.setMap(null);
      setMarker(() => undefined);
    };
  }, []);

  return (
    <div style={{ display: "none" }}>
      <div ref={ref} {...props}>
        {children}
      </div>
    </div>
  );
}
