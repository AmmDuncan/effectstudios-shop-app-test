<template>
  <div class="gallery-root">
    <div class="active">
      <div
        class="image"
        v-for="(image, index) in images"
        :key="image.id"
        :class="{ hide: index !== active }"
      >
        <img :src="image.image" alt="" />
        <div class="buttons">
          <div
            class="left-btn"
            @click="active = (images.length + (active - 1)) % images.length"
          >
            <CaretLeft />
          </div>
          <div class="right-btn" @click="active = (active + 1) % images.length">
            <CaretRight />
          </div>
        </div>
      </div>
    </div>
    <div class="collection">
      <div
        class="small-pic"
        :class="{ 'is-active': active === index }"
        @click="active = index"
        v-for="(image, index) in images"
        :key="image.id"
      >
        <img :src="image.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CaretLeft from "@/components/icons/CaretLeft.vue";
import CaretRight from "@/components/icons/CaretRight.vue";

const props = defineProps(["gallery"]);
const images = props.gallery || [];
const active = ref(0);
</script>

<style lang="scss" scoped>
.gallery-root {
  --gap: 1.6rem;
  --small-image-size: 10rem;
  display: grid;
  grid: auto-flow max-content / 1fr;
  gap: var(--gap);

  .active {
    width: 100%;
    padding-top: 100%;

    .image {
      position: absolute;
      inset: 0;
      transition: opacity 500ms ease;

      &.hide {
        opacity: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .collection {
    //display: grid;
    //grid: var(--small-image-size) / auto-flow 1fr;
    //gap: var(--gap);
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    > * + * {
      margin-left: var(--gap);
    }

    .small-pic {
      width: 100%;
      height: 100%;
      opacity: 0.3;
      cursor: pointer;
      max-width: 15rem;

      &.is-active {
        opacity: 1;

        &:before {
          content: "";
          position: absolute;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          border: 8px solid black;
          border-top-color: #111112;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .buttons {
    position: absolute;
    bottom: 1.6rem;
    right: 1.6rem;
    display: grid;
    grid: 3.2rem / repeat(2, 3.2rem);
    gap: 8px;
    color: white;

    > * {
      display: grid;
      place-content: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>
