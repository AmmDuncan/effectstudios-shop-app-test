<template>
  <div class="benefits-root">
    <InfoCardComponent
      v-for="(card, index) in infoList"
      :key="card.heading"
      :heading="card.heading"
      :text="card.text"
      :icon-index="index"
    />
  </div>
</template>

<script setup>
import InfoCardComponent from "@/components/home_view/InfoCardComponent.vue";

const infoList = [
  { heading: "Secure Shipping", text: "on all orders" },
  { heading: "Telephone", text: "+1 23 456 7890" },
  {
    heading: "Chat WhatsApp",
    text: "Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00",
  },
  {
    heading: "Quality Guarantee",
    text: "Verified Purchase Reviews",
  },
];
</script>

<style lang="scss" scoped>
.benefits-root {
  --spacing: 1.6rem;
  display: grid;
  grid: auto-flow max-content / 1fr 1fr;
  gap: var(--spacing);
  margin-top: var(--spacing);
  margin-inline: 1.6rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    margin-inline: 0;
  }
}
</style>
