<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent.vue";
import RewardCta from "@/components/RewardCta.vue";
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
  <RewardCta />
</template>

<style scoped></style>
