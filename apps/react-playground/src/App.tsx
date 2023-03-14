import { useState } from "react";
import { NaverMap } from "react-naver-maps/src";

export default function App() {
  const [isNumber, setIsNumber] = useState(0);
  const onClick = () => {
    setIsNumber((prev) => prev + 1);
  };

  const onMarkerLoaded = (marker: naver.maps.Marker) => {
    console.log(marker);
  };
  return (
    <>
      {isNumber}
      <NaverMap style={{ width: "50vw", height: "50vh" }}>
        <NaverMap.Marker
          latitude={37.5666103}
          longtitude={126.9783882}
          onLoaded={onMarkerLoaded}
        >
          <button onClick={onClick}>update</button>
        </NaverMap.Marker>
      </NaverMap>
    </>
  );
}
