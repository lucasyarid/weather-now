<template>
  <div class="home">
    <BaseTemperature :temperature="-4" />
  </div>
</template>

<script>
import { BaseTemperature } from "@/components/atoms";
export default {
  name: "home",
  components: {
    BaseTemperature
  }
};
</script>
