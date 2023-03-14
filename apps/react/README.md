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

- [@dongkyuuuu/react-naver-maps](#dongkyuuuureact-naver-maps)
  - [Support component](#support-component)
  - [Installation](#installation)
- [Documentation](#documentation)
  - [Quick start](#quick-start)
  - [NaverMapProvider](#navermapprovider)
  - [NaverMap](#navermap)
  - [NaverMap.Marker](#navermapmarker)

## Quick start

```tsx
import { NaverMapProvider, NaverMap } from "@dongkyuuuu/react-naver-maps";

function App() {
  return (
    <NaverMapProvider
      options={{
        clientId: "YOUT_CLIENT_ID", // require
        category: "", // optional, "gov" | "ncp" | "fin", default is ncp
        subModules: [], // optional, Array<"panorama" | "geocoder" | "drawing" | "visualization">
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

Before use `NaverMap` this component is loaded in your root.

```tsx
<NaverMapProvider
  options={{
      clientId: "YOUT_CLIENT_ID", // require
      category: "", // optional, "gov" | "ncp" | "fin", default is ncp
      subModules: [], // optional, Array<"panorama" | "geocoder" | "drawing" | "visualization">
  }}>
</NaverMapProvier>
```

- `clientId`: require, string
- `category`: optional, "gov" | "ncp" | "fin"
  - default value is "ncp"
- `subModules`: optional, Array<"panorama" | "geocoder" | "drawing" | "visualization">
  - default value is undefiend

## NaverMap

`NaverMap` Component. default props attribute is `HTMLDivElement`. Default `width` and `height` is `0`.

All other `NaverMap.x` component must be write inside `NaverMap`.

```tsx
<NaverMap
  onLoaded={onMapLoaded}
  initLayer={}
  mapOptions={{
    latitude: 37.5666103,
    longtitude: 126.9783882,
  }}
  style={{ width: "100vw", height: "100vh" }}
></NaverMap>
```

- `onLoaded`: optional, (map:naver.maps.Map)=>void
  - When Map obeject is created, `onLoaded` function is called.
  - Map object is passed as a parameter.
- `initLayer`: optional, Array<Layers>
- `mapOptions`: optional, naver.maps.MapOptions
  - If you want to change map center, write `latitude` and `longtitude`
  - other options can be found in [navermap docs - mapOptions](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.html#.MapOptions)

## NaverMap.Marker

`Marker` component.

If you want to use `HtmlIcon`, write jsx code inside `NaverMap.Marker` compoent.

```tsx
<NaverMap>
  <NaverMap.Marker
    latitude={37.5666103}
    longtitude={126.9783882}
    onLoaded={onLoadMarker}
  ></NaverMap.Marker>
</NaverMap>
```

- `latitude`: require
- `longtitude`: require
- `onLoaded`: optional, (marker:naver.maps.Marker)=>void
  - When Marker obeject is created, `onLoaded` function is called.
  - Marker object is passed as a parameter.
