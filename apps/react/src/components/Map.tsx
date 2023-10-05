import {
  useState,
  type PropsWithChildren,
  useEffect,
  useRef,
  type HtmlHTMLAttributes,
} from "react";
import type { InstallOptions, Layers, MapOptions } from "types";
import { getMapSettings, handleInstallScript } from "utils";
import { NaverMapContext } from "@/stores";

interface Props extends InstallOptions, HtmlHTMLAttributes<HTMLDivElement> {
  mapOptions?: MapOptions;
  initLayers?: Layers[];
  onLoaded?: (map: naver.maps.Map) => void;
}

export default function Map({
  clientId,
  category,
  subModules,
  initLayers,
  mapOptions,
  onLoaded,
  children,
  ...props
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement>(null);
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const [map, setMap] = useState<naver.maps.Map>();
  const options = { clientId, category, subModules };

  const handleCreateMap = () => {
    if (!ref.current) throw new Error("map ref is not founded");
    const mapInstance = new naver.maps.Map(
      ref.current,
      getMapSettings(mapOptions, initLayers),
    );
    setMap(() => mapInstance);
    setMapIsLoaded(() => true);

    onLoaded && onLoaded(mapInstance);
  };

  useEffect(() => {
    handleInstallScript({
      ...options,
      callback: [handleCreateMap],
    });

    return () => {
      map?.destroy();
      setMap(() => undefined);
    };
  }, []);

  return (
    <NaverMapContext.Provider value={{ map, mapIsLoaded }}>
      <div ref={ref} {...props}>
        {children}
      </div>
    </NaverMapContext.Provider>
  );
}
