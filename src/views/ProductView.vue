<template>
  <div class="root">
    <SingleProductCheckoutComponent />
  </div>
</template>

<script>
import SingleProductCheckoutComponent from "@/components/single_product_view/SingleProductCheckoutComponent";
export default {
  name: "ProductView",
  components: { SingleProductCheckoutComponent },
};
</script>

<style lang="scss" scoped>
.root {
  min-height: 70vh;
}
</style>
