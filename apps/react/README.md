# @dongkyuuuu/react-naver-maps

naverMap Components for React.

## Support component

`@dongkyuuuu/react-naver-maps` is beta version. We are planning to apply as soon as possible.

- [x] Map
- [x] Marker

## Installation

Via yarn

```bash
yarn add @dongkyuuuu/react-naver-maps
```

Via npm

```bash
npm install @dongkyuuuu/react-naver-maps
```

In a TypeScript project,

```bash
yarn add -D @types/navermaps
```

```bash
npm install --save-dev @types/navermaps
```

# Documentation

- [Quick start](#quick-start)
- [NaverMapProvider](#navermapprovider)

## Quick start

```tsx
import { NaverMapProvider, NaverMap } from "@dongkyuuuu/react-naver-maps";

function App() {
  return (
    <NaverMapProvider
      options={{
        clientId: "YOUT_CLIENT_ID", // require
        category: "", // optional, "gov" | "ncp" | "fin", default is ncp
        SubModules: [], // optional, Array<"panorama" | "geocoder" | "drawing" | "visualization">
      }}
    >
      <Example />
    </NaverMapProvider>
  );
}

function Example() {
  const onLoadMap = (map: naver.maps.Map) => {
    // you can access map object
    console.log("map", map);
  };
  const onLoadMarker = (marker: naver.maps.Marker) => {
    // you can access marker object
    console.log("marker", marker);
  };

  return (
    <NaverMap onLoaded={onLoadMap} style={{ width: "100vw", height: "100vh" }}>
      <NaverMap.Marker
        latitude={37.5666103}
        longtitude={126.9783882}
        onLoaded={onLoadMarker}
      >
        {/* Html Icon Support, write your jsx code */}
        {/* If you don't write anything, use default marker */}
      </NaverMap.Marker>
    </NaverMap>
  );
}
```

## NaverMapProvider
