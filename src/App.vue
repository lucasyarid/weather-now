<template>
  <div id="app" class="App">
    <TheHeader />
    <router-view class="App__main" />
  </div>
</template>

<script>
import { TheHeader } from "@/components/organisms";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

body {
  margin: 0;
  min-height: 100vh;
  background-color: $color-light;
}
</style>

<style lang="scss" scoped>
.App {
  &__main {
    padding-top: 50px;
  }
}
</style>
