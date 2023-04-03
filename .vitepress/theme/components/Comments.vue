<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onMounted } from "vue";
// import { useData } from "vitepress";
// const relativePath = useData().page.value.relativePath;

onMounted(() => {
  const gitalk = new Gitalk({
    clientID: "eca5c30b7b321d360509",
    clientSecret: "82469a03d01088202384da33fecff65e3640e168",
    repo: "blog-comments",
    owner: "silver-ymz",
    admin: ["silver-ymz"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "zh-CN",
    distractionFreeMode: true, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>
<style scoped></style>
