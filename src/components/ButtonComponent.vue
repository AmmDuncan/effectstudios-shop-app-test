<template>
  <button :class="['btn', { full: full, outline: outline }]">
    <span class="btn__text"><slot></slot></span>
    <span class="btn__icon"><slot name="icon"></slot></span>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: ["full", "outline"],
};
</script>

<style lang="scss" scoped>
.btn {
  display: grid;
  grid: 4rem / max-content 4rem;
  padding: 0;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  border: none;
  background: none;
  text-transform: capitalize;
  cursor: pointer;
  transition: opacity 300ms ease;
  color: #111112;

  &__text {
    display: grid;
    height: 100%;
    place-content: center;
    padding: 0 1.6rem;
    background: var(--yellow);
    //transition: background-color 300ms ease;
  }

  &__icon {
    height: 100%;
    display: grid;
    place-content: center;
    background: black;
    color: white;
  }

  &.full {
    width: 100%;
    grid: 4rem / auto 4rem;
  }

  &.outline {
    .btn__text {
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(4px);
      border: 1px solid white;
      color: white;
    }

    .btn__icon {
      background: white;
      color: black;
    }

    &:hover {
      .btn__text {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  &:hover {
    .btn__text {
      background: #e2c832;
    }
  }
}
</style>
