<template>
  <figure class="BaseLoading">
    <img class="BaseLoading__img" :src="src" alt="WEATHERNOW Logo" />
  </figure>
</template>

<script>
export default {
  name: "BaseLoading",
  props: {
    variation: {
      type: String,
      default: "default"
    }
  },
  computed: {
    src() {
      return require("@/assets/images/loader.svg");
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseLoading {
  margin: 0;
  width: 50%;
  height: fit-content;
  margin: 0 auto;
  &__img {
    width: 50%;
  }
}
</style>
