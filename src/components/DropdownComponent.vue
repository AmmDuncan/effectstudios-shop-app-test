<template>
  <div class="dropdown" @click="toggleOpen">
    <span class="text">{{ options[props.modelValue] }}</span>
    <span class="icon" :class="{ 'is-open': isOpen }"><CaretDown /></span>
    <ul class="option-list" :class="{ 'is-open': isOpen }">
      <li v-for="option in Object.entries(props.options)" :key="option[0]">
        <button @click="emit('update:modelValue', option[0])">
          {{ option[1] }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import CaretDown from "@/components/icons/CaretDown.vue";

import { defineProps, ref } from "vue";

const props = defineProps({
  modelValue: String,
  options: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(["update:modelValue"]);
const isOpen = ref(false);
const toggleOpen = () => (isOpen.value = !isOpen.value);
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid: 1fr / max-content auto;
  gap: 8px;
  padding-inline: 2rem;
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  cursor: pointer;

  .text {
    display: inline-block;
    overflow-x: hidden;
  }

  .option-list {
    position: absolute;
    z-index: 10;
    top: 100%;
    overflow-y: hidden;

    width: 200%;
    height: 0;
    max-width: 240px;
    display: grid;
    grid: auto-flow max-content / 1fr;
    padding: 0;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

    background-color: #fff;
    list-style: none;
    transition: height 300ms ease;

    &.is-open {
      height: max-content;
    }

    li {
      width: 100%;
      border-top: 1px solid #f5f5f6;
    }

    button {
      width: 100%;
      border: none;
      padding: 1.2rem 1.6rem;
      background: none;
      text-align: left;
      cursor: pointer;

      &:hover {
        background-color: #f2f2f2;
      }
    }
  }

  .icon {
    display: grid;
    place-content: center;
    transition: transform 200ms ease;

    &.is-open {
      transform: rotateZ(-90deg);
    }
  }
}
</style>
