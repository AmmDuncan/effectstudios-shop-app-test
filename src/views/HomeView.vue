<script setup>
import BannerComponent from "@/components/home_view/BannerComponent.vue";
import MostPopularComponent from "@/components/home_view/MostPopularComponent.vue";
import CountryLeaguesComponent from "@/components/home_view/CountryLeaguesComponent.vue";
import OtherCollections from "@/components/home_view/OtherCollections.vue";
import ExtraCardsComponent from "@/components/home_view/ExtraCardsComponent.vue";
</script>

<template>
  <main>
    <BannerComponent></BannerComponent>
    <MostPopularComponent />
    <CountryLeaguesComponent />
    <OtherCollections />
    <ExtraCardsComponent />
  </main>
</template>
