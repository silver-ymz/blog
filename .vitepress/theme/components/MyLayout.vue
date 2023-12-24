<template>
  <Layout>
    <template #doc-before>
      <Title />
      <Category />
    </template>
    <!-- Home slot-->
    <template #home-hero-before><HomeHero /> </template>
    <template #home-features-after> <Page /></template>
  </Layout>
  <!-- copywright -->
  <Copyright />
</template>
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import HomeHero from "./HomeHero.vue";
import Copyright from "./Copyright.vue";
import Page from "./Page.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
</script>
<style scoped></style>
