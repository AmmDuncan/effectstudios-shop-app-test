<template>
  <div class="container">
    <div class="country-leagues">
      <div class="country-leagues__header">
        <h2>Country Leagues</h2>
      </div>
      <LoadingStateComponent v-if="loading" />
      <div class="country-leagues__content" v-else>
        <div
          class="league-card"
          v-for="league in countryLeagues"
          :key="league.id"
        >
          <div class="image">
            <img :src="league.image" alt="" />
          </div>
          <div class="title">{{ league.title }}</div>
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

const modReq = async () => getCategoriesBySlug("country-leagues");
const { data, loading } = useFetch(modReq);

const countryLeagues = computed(
  () => data.value?.category?.sub_categories || []
);
</script>

<style lang="scss" scoped>
.country-leagues {
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
    grid: auto-flow / repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;

    @media (min-width: 992px) {
      grid: auto-flow / repeat(auto-fit, minmax(25rem, 1fr));
      row-gap: 3.2rem;
    }
  }
}

.league-card {
  &:hover {
    .title {
      text-decoration: underline;
    }
  }
  .title {
    margin-top: 0.4rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  img {
    width: 100%;
  }
}
</style>
