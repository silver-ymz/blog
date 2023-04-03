<template>
  <div class="main">
    <h1 class="linktitle"> Friend Links: </h1>
    <div class="linklist">
      <a class="linkcard" v-for="link in links" :href="link.link" target="_blank">
        <div class="name">{{ link.name }}</div>
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useData } from "vitepress";

const { theme } = useData();
let links = theme.value.links || [];
</script>

<style scoped>
.main {
  margin: 0 auto;
  padding: 0.5rem 1.5rem 4rem;
  max-width: 48rem;
}

.linktitle {
  text-align: left;
  font-weight: bold;
  font-size: 2rem;
  margin: 20px 40px;
}

.linklist {
  padding: 30px 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 20px 10px;
  padding: 10px 40px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.linkcard {
  display: block;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  max-width: 500px;
  border: 4px solid #3f4e4f;
  cursor: pointer;
  box-shadow: 6px 6px var(--vp-c-brand);
}

.linkcard:hover {
  text-decoration: none;
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px var(--vp-c-brand);
}

.name {
  color: var(--vp-c-brand-light);
  font-size: 1.2em;
  font-weight: bold;
}
</style>
