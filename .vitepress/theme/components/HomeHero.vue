<template>
  <div class="pic"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import lottie from "lottie-web/build/player/lottie_light.min.js";
onMounted(() => {
  // storage lottie
  const svgContainer = document.getElementById("svgContainer");
  if (svgContainer) {
    return;
  }
  // created insertNode and add style
  const insertNode = document.createElement("div");
  insertNode.id = "svgContainer";
  insertNode.style.width = "300px";
  insertNode.style.margin = "0 auto";
  const pic = document.getElementsByClassName("pic")[0];
  pic.appendChild(insertNode);
  // created lottie
  const animItem = lottie.loadAnimation({
    container: insertNode,
    renderer: "svg",
    loop: true,
    path: "/markus.json",
  });
});
</script>
<style scoped>
.pic {
  text-align: center;
  height: 300px;
}
</style>
