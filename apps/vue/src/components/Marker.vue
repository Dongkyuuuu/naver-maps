<script lang="ts" setup>
import { useNaverMap } from "../composables/useNaverMap";
import { ref, useAttrs, watch } from "vue";

const emits = defineEmits<{
  (event: "onLoaded", marker: naver.maps.Marker): void;
}>();
const props = defineProps<{
  latitude: number;
  longitude: number;
  htmlIcon?: naver.maps.HtmlIcon;
}>();

const attrs = useAttrs();
const { getNaverMap } = useNaverMap();
const { mapIsLoaded, map } = getNaverMap();

const marker = ref<naver.maps.Marker>();
const markerRef = ref<HTMLDivElement>();

const getMarkerIcon = () => {
  if (!markerRef.value?.childElementCount) return undefined; // default marker
  return Object.assign({ content: markerRef.value }, props.htmlIcon ?? {});
};
const handleCreateMarker = () => {
  if (!markerRef.value) throw new Error("marker ref is not founded");
  marker.value = new naver.maps.Marker({
    position: new naver.maps.LatLng(props.latitude, props.longitude),
    map: map?.value,
    icon: getMarkerIcon(),
  });
  emits("onLoaded", marker.value);
};

watch(
  () => mapIsLoaded?.value,
  (newVal) => {
    if (!newVal) return;
    handleCreateMarker();
  },
);
</script>

<template>
  <div style="display: none">
    <div ref="markerRef" v-bind="attrs">
      <slot />
    </div>
  </div>
</template>
