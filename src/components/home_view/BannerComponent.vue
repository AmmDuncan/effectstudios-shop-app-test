<template>
  <div class="hero-container">
    <div class="banner">
      <template v-if="!loading">
        <template v-for="(banner, index) in bannerList" :key="banner.id">
          <div class="banner__image" :class="{ hide: index !== active }">
            <img :src="banner.image" alt="" />
          </div>
        </template>

        <div class="banner__image-overlay"></div>

        <div class="banner__content">
          <div class="banner__text-wrapper">
            <template v-for="(banner, index) in bannerList" :key="banner.id">
              <div
                :class="{ 'hide text': index !== active }"
                class="banner__text"
              >
                <span v-html="banner.content"></span>
              </div>
            </template>
          </div>

          <div class="banner__footer">
            <div class="banner__timeline">
              <div
                v-for="(banner, index) in bannerList"
                @click="setActive(index)"
                :class="[
                  'banner__timeline__item',
                  { active: index === active },
                ]"
                :key="banner.id"
              ></div>
            </div>
            <button-component :full="true" :outline="true">
              <template v-slot:default>
                {{ bannerList[active].btn_text }}
              </template>
              <template v-slot:icon>
                <ShoppingBagIcon />
              </template>
            </button-component>
          </div>
        </div>
      </template>
    </div>
    <BenefitsAndOtherInfoComponent />
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { getBannerListing } from "@/services/banner";
import { useFetch } from "@/composables/useFetch";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon.vue";
import BenefitsAndOtherInfoComponent from "@/components/home_view/BenefitsAndOtherInfoComponent.vue";

const { loading, data } = useFetch(getBannerListing);
const bannerList = computed(() => data.value?.banners?.data || []);
const active = ref(0);

function setActive(ind) {
  active.value = ind;
}

let interval;

function setSliderInterval() {
  interval = setInterval(
    () => (active.value = (active.value + 1) % bannerList.value.length),
    5000
  );
}

watch(active, () => {
  clearInterval(interval);
  setSliderInterval();
});

onMounted(() => {
  setSliderInterval();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.hero-container {
  @media (min-width: 992px) {
    width: calc(100% - 8rem);
    margin: 4rem 4rem 0 4rem;
  }
}

.banner {
  position: relative;
  padding: 2.4rem;
  color: white;
  background: grey;
  height: 39rem;
  overflow-y: hidden;

  @media (min-width: 768px) {
    min-height: 40rem;
  }

  @media (min-width: 992px) {
    padding: 8rem 4rem 4rem 8rem;
  }

  * {
    transition: opacity 700ms ease, height 100ms 500ms ease;
  }

  &__image,
  &__image-overlay {
    position: absolute;
    inset: 0;
    display: block;
    height: 100%;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image-overlay {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.4)
    );

    @media (min-width: 992px) {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.1)
      );
    }
  }

  &__text {
    max-width: 20ch;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: -0.04em;

    @media (min-width: 576px) {
      font-size: 3.6rem;
      line-height: 48px;
    }

    @media (min-width: 768px) {
      font-size: 4rem;
      line-height: 48px;
    }
  }
}

.banner__content {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.banner__footer {
  display: grid;
  grid: 1fr / auto 15rem;
  gap: 2.5rem;
  align-items: flex-end;
}

.banner__timeline {
  width: 100%;
  max-width: 43rem;
  display: grid;
  grid: 4px / auto-flow 4rem;
  gap: 4px;

  &__item {
    background: white;
    opacity: 0.3;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    &.active {
      background: var(--yellow);
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    gap: 8px;
    grid: 4px / auto-flow 8rem;
  }
}

.hide {
  opacity: 0;

  &.text {
    height: 0;
    overflow: hidden;
  }
}
</style>
