<template>
  <div class="TheHeader">
    <BaseLogo class="TheHeader__logo" />
  </div>
</template>

<script>
import { BaseLogo } from "@/components/atoms";

export default {
  name: "TheHeader",
  components: {
    BaseLogo
  }
};
</script>

<style lang="scss" scoped>
.TheHeader {
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 5px 0px $color-box-shadow;
  &__logo {
    width: 125px;
  }
}
</style>
