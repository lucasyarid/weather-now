<template>
  <figure class="BaseLogo">
    <img class="BaseLogo__img" :src="src" alt="WEATHERNOW Logo" />
  </figure>
</template>

<script>
export default {
  name: "BaseLogo",
  props: {
    variation: {
      type: String,
      default: "default"
    }
  },
  computed: {
    src() {
      return require("@/assets/images/logo/" + this.variation + ".svg");
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseLogo {
  margin: 0;
  width: 100%;
  height: fit-content;
  &__img {
    width: 100%;
  }
}
</style>
