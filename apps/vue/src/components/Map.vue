<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { handleInstallScript, getMapSettings } from "utils";
import { useNaverMap } from "../composables/useNaverMap";
import type { Layers, MapOptions, InstallOptions } from "types";

const emits = defineEmits<{
  (event: "onLoaded", map: naver.maps.Map): void;
}>();
const props = defineProps<
  {
    mapOptions?: MapOptions;
    initLayers?: Layers[];
  } & InstallOptions
>();

const map = ref<naver.maps.Map>();
const mapIsLoaded = ref(false);
const mapRef = ref<HTMLDivElement>();
const { setNaverMap } = useNaverMap();

setNaverMap({
  map,
  mapIsLoaded,
});

const handleCreateMap = () => {
  if (!mapRef.value) throw new Error("map ref is not founded");
  map.value = new naver.maps.Map(
    mapRef.value,
    getMapSettings(props.mapOptions, props.initLayers),
  );
  mapIsLoaded.value = true;
  emits("onLoaded", map.value);
};

onMounted(() => {
  handleInstallScript({
    clientId: props.clientId,
    subModules: props.subModules,
    category: props.category,
    callback: [handleCreateMap],
  });
});

onUnmounted(() => {
  map.value?.destroy();
  map.value = undefined;
});
</script>

<template>
  <div ref="mapRef">
    <slot />
  </div>
</template>
