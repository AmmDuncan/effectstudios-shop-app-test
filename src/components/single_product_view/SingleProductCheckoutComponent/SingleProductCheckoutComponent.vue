<template>
  <div class="container">
    <LoadingStateComponent h="70vh" v-if="loading" />
    <div class="product-checkout" v-else>
      <div class="breadcrumbs">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
        </div>
        <span class="sep">></span>
        <div class="breadcrumb" v-if="product.categories[0]?.title">
          <router-link to="/">{{ product.categories[0]?.title }}</router-link>
        </div>
        <span class="sep" v-if="product.categories[0]?.title">></span>
        <div class="breadcrumb">
          <span class="text">{{ product.product_name }}</span>
        </div>
      </div>

      <div class="content">
        <div class="gallery">
          <SingleProductGalleryComponent :gallery="product.gallery" />
        </div>
        <div class="details">
          <h1>{{ product.product_name }}</h1>

          <div class="row">
            <div class="price-info">
              <div class="price">€{{ price }}</div>
              <div class="oldPrice" v-if="oldPrice">{{ oldPrice }}</div>
              <div class="savings" v-if="savings">
                Save {{ (savings * 100).toFixed() }}%
              </div>
            </div>
            <div class="favorite-btn">
              <HeartIcon />
              <span class="hide-small">Add to Favorites</span>
            </div>
          </div>

          <div class="description">
            <span
              class="text"
              v-html="product.description"
              :style="{
                display: expandDescription ? 'block' : '-webkit-box',
                maxHeight: expandDescription ? '100%' : '9.6rem',
              }"
            ></span>
            <span v-if="!expandDescription">...</span>
            <div
              class="read-more"
              @click="expandDescription = !expandDescription"
            >
              <span v-if="!expandDescription">Read more</span>
              <span v-else>Show less</span>
            </div>
          </div>

          <form @submit.prevent class="form">
            <div class="form-control">
              <label for="size">Size<span class="required">*</span></label>
              <div class="input-group">
                <div class="input-wrapper">
                  <select name="size" id="size">
                    <option value="">Select a shirt size</option>
                  </select>
                </div>
                <div class="input-btn">
                  <span class="hide-small">View </span>Size Chart
                </div>
              </div>
            </div>

            <div class="form-control">
              <label for="name">Name</label>
              <div class="input-group">
                <div class="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="What name would you want in the shirt?"
                  />
                </div>
              </div>
            </div>

            <div class="form-control">
              <label for="number">Number on Shirt</label>
              <div class="input-group">
                <div class="input-wrapper">
                  <input
                    type="number"
                    min="0"
                    max="99"
                    name="number"
                    id="number"
                    placeholder="Enter number between 0 and 99"
                  />
                </div>
              </div>
            </div>

            <div class="form-control">
              <label for="patch">Patch</label>
              <div class="input-group">
                <div class="input-wrapper">
                  <select name="patch" id="patch">
                    <option value="">Select a patch</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-control">
              <label for="quantity">Quantity</label>
              <div class="input-group">
                <div class="input-wrapper self">
                  <input
                    type="number"
                    v-model="order.quantity"
                    min="0"
                    name="quantity"
                    id="quantity"
                    placeholder="Enter number between 0 and 99"
                  />
                </div>
              </div>
            </div>

            <ButtonComponent :full="true" :lg="true" :left="true">
              <template v-slot:default>Add to Cart</template>
              <template v-slot:icon><CartIconSmall /></template>
            </ButtonComponent>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingStateComponent from "@/components/LoadingStateComponent.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import { useFetch } from "@/composables/useFetch";
import { getProductBySlug } from "@/services";
import { useRoute } from "vue-router";
import { computed, reactive, ref } from "vue";
import { useProductPriceInfo } from "@/composables/useProductPriceInfo";
import ButtonComponent from "@/components/ButtonComponent.vue";
import CartIconSmall from "@/components/icons/CartIconSmall.vue";
import SingleProductGalleryComponent from "@/components/single_product_view/SingleProductGalleryComponent.vue";

const expandDescription = ref(false);

const {
  params: { slug },
} = useRoute();
const { data, loading } = useFetch(() => getProductBySlug(slug));
const product = computed(() => data.value?.product || {});
const { getPriceInfo } = useProductPriceInfo();
const priceInfo = computed(() => getPriceInfo(product.value));
const price = computed(() => priceInfo.value.price);
const oldPrice = computed(() => priceInfo.value.oldPrice);
const savings = computed(() => priceInfo.value.savings);

const order = reactive({
  size: "",
  quantity: 1,
});
</script>

<style lang="scss" scoped>
@import "SingleProductCheckoutComponent.styles";

.breadcrumbs {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 2.4rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  > * + * {
    margin-left: 8px;
  }

  .sep {
    font-size: 1.4rem;
  }
}

.breadcrumb {
  width: max-content;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: -0.04em;

  &:first-of-type {
    width: fit-content;
  }

  & > * {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a {
    color: #1256db;
  }
}
</style>
