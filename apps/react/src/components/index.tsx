import Provider from "./Provider.component";
import Map from "./Map.component";
import Marker from "./Marker.component";

type ComponentTypes = typeof Map & {
  Marker: typeof Marker;
};

export const NaverMapProvider = Provider;
export const NaverMap = Map as ComponentTypes;
NaverMap.Marker = Marker;
