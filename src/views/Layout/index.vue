<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutSticky from "./components/LayoutSticky.vue";
</script>

<template>
  <div>
    <LayoutSticky />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss"></style>
