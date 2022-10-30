<template>
  <div class="card-root">
    <div class="card-icon"><component :is="icons[iconIndex]" /></div>
    <div class="heading">{{ heading }}</div>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
import TruckIcon from "@/components/icons/TruckIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import WhatsappIcon from "@/components/icons/WhatsappIcon.vue";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon.vue";

export default {
  name: "InfoCardComponent",
  props: ["heading", "text", "iconIndex"],
  data: () => ({
    icons: [TruckIcon, PhoneIcon, WhatsappIcon, CheckMarkIcon],
  }),
};
</script>

<style lang="scss" scoped>
.card-root {
  padding: 3.2rem;
  background: #fefae1;

  .card-icon {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-content: center;
    background-color: var(--yellow);
    color: white;

    &:before,
    &:after {
      position: absolute;
      content: "";
      width: 4rem;
      height: 3.2rem;
    }

    &:before {
      top: -3.2rem;
      background-color: inherit;
      opacity: 0.16;
      transform: skewX(45deg) translateX(-1.6rem);
    }

    &:after {
      height: 4rem;
      width: 3.2rem;
      left: -3.2rem;
      background-color: inherit;
      opacity: 0.4;
      transform: skewY(45deg) translateY(-1.6rem);
    }
  }

  .heading {
    margin-block: 1.2rem 0.4rem;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  .text {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
}
</style>
