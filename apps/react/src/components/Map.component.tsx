import { useEffect, useRef, useState } from "react";
import { useNaverMapScript, useMap } from "utils";
import { NaverMapContext } from "@/hooks/useNaverMap";

import type { Layers, MapOptions } from "types";
import type { PropsWithChildren, HTMLAttributes } from "react";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  onLoaded?: (map: naver.maps.Map) => void;
  initLayers?: Layers[];
  mapOptions?: MapOptions;
}

export default function Map({
  children,
  initLayers,
  mapOptions,
  onLoaded,
  ...props
}: Props) {
  const { getMapSettings } = useMap();
  const { callbackAfterScriptLoaded } = useNaverMapScript();
  const mapDiv = useRef(null);
  const [navermap, setNaverMap] = useState<naver.maps.Map>();

  const useInitMap = () => {
    if (!mapDiv.current) return;

    const init = new window.naver.maps.Map(
      mapDiv.current,
      getMapSettings(mapOptions, initLayers)
    );
    setNaverMap(init);
    onLoaded && onLoaded(init);
  };

  useEffect(() => {
    window.naver ? useInitMap() : callbackAfterScriptLoaded(useInitMap);

    return () => {
      navermap?.destroy();
      setNaverMap(undefined);
    };
  }, []);

  return (
    <NaverMapContext.Provider value={navermap}>
      <div ref={mapDiv} {...props}>
        {children}
      </div>
    </NaverMapContext.Provider>
  );
}
