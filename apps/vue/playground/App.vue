<script setup lang="ts">
import { NaverMap, NaverMarker } from "../src";
const clinetid = import.meta.env.VITE_NAVER_MAP_KEY;
</script>

<template>
  <NaverMap :client-id="clinetid" style="width: 60vw; height: 60vh">
    <NaverMarker
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
    />
  </NaverMap>
</template>
