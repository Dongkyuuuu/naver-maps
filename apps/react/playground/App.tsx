import { NaverMap, NaverMarker } from "@/index";

function App() {
  const key = import.meta.env.VITE_NAVER_MAP_KEY;
  return (
    <>
      <NaverMap clientId={key} style={{ width: "60vw", height: "50vh" }}>
        <NaverMarker
          latitude={37.566616443521745}
          longitude={126.97837068565364}
        >
          sdds
        </NaverMarker>
      </NaverMap>
    </>
  );
}

export default App;
