import { useEffect, useRef, useState } from "react";
import { useNaverMapScript } from "utils";
import { NaverMapContext } from "@/hooks/useNaverMap";
import type { PropsWithChildren, HTMLAttributes } from "react";

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  onLoaded?: (map: naver.maps.Map) => void;
}

export default function Map({ children, onLoaded, ...props }: Props) {
  const { callbackAfterScriptLoaded } = useNaverMapScript();
  const mapDiv = useRef(null);
  const [navermap, setNaverMap] = useState<naver.maps.Map>();

  const useInitMap = () => {
    if (!mapDiv.current) return;

    const init = new window.naver.maps.Map(mapDiv.current);
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
