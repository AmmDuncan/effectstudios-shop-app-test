<template>
  <div class="container">
    <div class="popular-section">
      <div class="popular-section__header">
        <h2>Most Popular T-Shirts</h2>
        <div class="buttons">
          <div class="left-btn" @click="handleLeftBtnClick">
            <CaretLeft />
          </div>
          <div class="right-btn" @click="handleRightBtnClick">
            <CaretRight />
          </div>
        </div>
      </div>
      <LoadingStateComponent h="34rem" v-if="loading" />
      <div
        class="popular-section__content scroll-bar"
        ref="cardContainer"
        v-else
      >
        <div
          class="product-card"
          v-for="(product, index) in popularProducts"
          @click="
            $router.push({
              name: 'single-product',
              params: { slug: product.slug },
            })
          "
          :title="product.product_name"
          :key="product.id"
        >
          <div class="image">
            <img :src="product.gallery[0].image" alt="" />
            <div class="savings" v-if="priceInfo[index].savings">
              Save {{ (priceInfo[index].savings * 100).toFixed(0) }}%
            </div>
          </div>
          <div class="card-body">
            <div class="name">{{ product.product_name }}</div>
            <div class="price">
              €{{ priceInfo[index].price }}
              <span class="oldPrice" v-if="priceInfo[index].oldPrice">
                {{ priceInfo[index].oldPrice }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/composables/useFetch";
import { getPopularProducts } from "@/services";
import { computed, ref } from "vue";
import CaretLeft from "@/components/icons/CaretLeft.vue";
import CaretRight from "@/components/icons/CaretRight.vue";
import LoadingStateComponent from "@/components/LoadingStateComponent.vue";
import { useProductPriceInfo } from "@/composables/useProductPriceInfo";

const { data, loading } = useFetch(getPopularProducts);
const popularProducts = computed(() => data.value?.products?.data || []);
const priceInfo = computed(() =>
  popularProducts.value.map((p) => getPriceInfo(p))
);
const cardContainer = ref(null);

function handleLeftBtnClick() {
  const scrollLeft = cardContainer.value.scrollLeft;
  cardContainer.value.scrollLeft = scrollLeft - 240;
}

function handleRightBtnClick() {
  const scrollLeft = cardContainer.value.scrollLeft;
  cardContainer.value.scrollLeft = scrollLeft + 240;
}
const { getPriceInfo } = useProductPriceInfo();
</script>

<style lang="scss" scoped>
.popular-section {
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

  .buttons {
    display: grid;
    grid: 1fr / auto-flow 1fr;
    gap: 8px;
  }

  .left-btn,
  .right-btn {
    width: 4rem;
    height: 4rem;
    display: grid;
    place-content: center;
    border: 1px solid #eaeaec;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f6;
    }
  }
}

.popular-section__content {
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
  display: grid;
  grid: 34rem / auto-flow max-content;
  gap: 3.2rem;
  scroll-snap-type: inline;
  scroll-behavior: smooth;
}

.product-card {
  width: 24rem;
  border: 1px solid #eaeaec;
  scroll-snap-align: start;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.03);
    }

    .name {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }

  .image {
    width: 100%;
    height: 24rem;
    overflow: hidden;

    .savings {
      position: absolute;
      padding: 0.4rem 0.8rem;
      background: #23c353;
      color: white;
      bottom: 1.6rem;
      left: 1.6rem;
      font-weight: 600;
      font-size: 10px;
      line-height: 16px;
      text-align: center;
      //letter-spacing: -0.02em;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 200ms ease;
  }

  .card-body {
    padding: 1.6rem 1.6rem;

    .name {
      width: 100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 8px;
      min-height: 3.6rem;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }

    .price {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
      letter-spacing: -0.02em;
    }

    .oldPrice {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.02em;
      text-decoration-line: line-through;
      color: #ee503e;
    }
  }
}
</style>
