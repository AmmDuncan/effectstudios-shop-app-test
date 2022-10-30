<template>
  <div class="container">
    <div class="other-leagues">
      <div class="other-leagues__header">
        <h2>Other Collections</h2>
      </div>
      <LoadingStateComponent v-if="loading" />
      <div class="other-leagues__content" v-else>
        <div
          class="collection-card"
          v-for="collection in otherCollections"
          :key="collection.id"
        >
          <div class="image">
            <img :src="collection.image" alt="" />
          </div>
          <div class="title">
            <div class="text">{{ collection.title }}</div>
            <div class="icon"><CaretRight /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/composables/useFetch";
import { getCategoriesBySlug } from "@/services";
import { computed } from "vue";
import LoadingStateComponent from "@/components/LoadingStateComponent.vue";
import CaretRight from "@/components/icons/CaretRight.vue";

const modReq = async () => getCategoriesBySlug("others");
const { data, loading } = useFetch(modReq);

const otherCollections = computed(
  () => data.value?.category?.sub_categories || []
);
</script>

<style lang="scss" scoped>
.other-leagues {
  margin-top: 8rem;

  @media (min-width: 992px) {
    margin-top: 12.4rem;
  }

  &__header {
    display: grid;
    grid: 1fr / auto max-content;
    margin-bottom: 2.4rem;
    text-transform: uppercase;

    h2 {
      font-weight: 800;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;
    }

    @media (min-width: 992px) {
      margin-bottom: 4rem;

      h2 {
        font-size: 3.2rem;
        line-height: 4rem;
      }
    }
  }

  &__content {
    display: grid;
    grid: auto-flow 1fr / repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;

    @media (min-width: 992px) {
      grid: auto-flow / repeat(auto-fit, minmax(42.9rem, 1fr));
      //row-gap: 3.2rem;
    }
  }
}

.collection-card {
  height: 17rem;
  cursor: pointer;

  &:hover {
    .title {
      background: #111112;
    }
  }

  @media (min-width: 768px) {
    height: 24rem;
  }

  .title {
    position: absolute;
    height: 4.8rem;
    width: 100%;
    display: grid;
    grid: 1fr / auto 4.8rem;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    bottom: 0;
    margin-top: 0.8rem;
    padding-left: 1.6rem;

    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.04em;
    color: #fff;
    transition: background-color 250ms ease;

    @media (min-width: 992px) {
      padding-left: 2.4rem;
    }

    .icon {
      height: 4.8rem;
      display: grid;
      place-content: center;
      background-color: var(--yellow);
      color: black;
    }
  }

  .image {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
