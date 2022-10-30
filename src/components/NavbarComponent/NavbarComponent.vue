<template>
  <div>
    <div class="meta-bar">
      <div class="meta-bar__lang"><GlobeIconNet />EN<CaretDown /></div>
      <div class="meta-bar__content">
        <span class="moving-text"
          >SALES BEGIN • FREE SHIPPING ON ALL ORDERS</span
        >
      </div>
      <div class="meta-bar__social">
        <WhatsappIcon /><span class="text"
          >Chat<span class="hide-small"> with us</span></span
        >
      </div>
    </div>

    <div class="navbar--mobile hide-from-992">
      <div class="left-group">
        <div class="nav-button" @click="toggleNavOpen">
          <HamburgerIcon />
        </div>
        <div class="nav-button">
          <SearchIcon />
        </div>
      </div>
      <div class="right-group">
        <div class="nav-button">
          <CartIcon />
        </div>
        <div class="nav-button h-stack g-1">
          <ProfileIcon />
          <CaretDown />
        </div>
      </div>
    </div>

    <nav
      class="navbar__content--mobile hide-from-992"
      :class="{ 'is-open': isMobileNavOpen }"
    >
      <div class="close-btn" @click="isMobileNavOpen = false">
        <ExIcon />
      </div>
      <ul>
        <li v-for="navItem in navList" :key="navItem.name">
          <router-link :to="navItem.path" @click="isMobileNavOpen = false"
            >{{ navItem.name }} <CaretDown v-if="navItem.children"
          /></router-link>
        </li>
      </ul>
    </nav>

    <div class="navbar hide-till-992">
      <div class="navbar__logo"></div>
      <div class="navbar__content">
        <div class="navbar__content__top-stack">
          <div class="category">
            <DropdownComponent v-model="category" :options="categoryOptions" />
          </div>
          <div class="search">
            <input type="text" placeholder="What are you looking for" />
            <div class="button-wrapper">
              <ButtonComponent>
                <template v-slot:default>Search</template>
                <template v-slot:icon><SearchIcon /></template>
              </ButtonComponent>
            </div>
          </div>
          <div class="right-group">
            <div class="nav-button">
              <CartIcon />
            </div>
            <div class="nav-button h-stack g-1">
              <ProfileIcon />
              <CaretDown />
            </div>
          </div>
        </div>
        <nav class="navbar__content__bottom-stack">
          <ul>
            <li v-for="navItem in navList" :key="navItem.name">
              <router-link
                :to="navItem.path"
                :class="{ active: navItem.active }"
                >{{ navItem.name }} <CaretDown v-if="navItem.children"
              /></router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import GlobeIconNet from "@/components/icons/GlobeNetIcon.vue";
import CaretDown from "@/components/icons/CaretDown.vue";
import WhatsappIcon from "@/components/icons/WhatsappIcon.vue";
import HamburgerIcon from "@/components/icons/HamburgerIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import CartIcon from "@/components/icons/CartIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";
import { computed, ref } from "vue";
import DropdownComponent from "@/components/DropdownComponent.vue";
import { useFetch } from "@/composables/useFetch";
import { getProductCategories } from "@/services";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ExIcon from "@/components/icons/ExIcon.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMobileNavOpen = ref(false);
const toggleNavOpen = () => (isMobileNavOpen.value = !isMobileNavOpen.value);
const location = computed(() => {
  void route.name;
  return window.location.pathname;
});
console.log(location);
const navList = [
  {
    name: "Home",
    path: "/",
  },
  { name: "T-Shirts", children: [], path: "/t-shirts" },
  { name: "NBA", children: [], path: "/nba" },
  { name: "Tracksuits", path: "/tracksuits" },
  { name: "Products Delivery  •  1 – 2 days", path: "/delivery" },
  { name: "Contact", path: "/contact" },
  { name: "Reviews", path: "/reviews" },
];

console.log(route);

const { data } = useFetch(getProductCategories);

const category = ref("");
const categoryList = computed(() => data.value?.categories?.data || []);
const categoryOptions = computed(() =>
  categoryList.value.reduce(
    (prev, cur) => {
      prev[cur.id] = cur.title;
      return prev;
    },
    { "": "All Categories" }
  )
);
</script>

<style lang="scss" scoped>
@import "NavbarComponent";
@import "NavbarComponent.meta-bar";
@import "NavbarComponent.navbar-mobile";
</style>
