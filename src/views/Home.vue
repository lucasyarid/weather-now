<template>
  <div class="home">
    <BaseTemperature :temperature="-4" />
    <BasePressure :pressure="892" />
  </div>
</template>

<script>
import { BaseTemperature, BasePressure } from "@/components/atoms";
export default {
  name: "home",
  components: {
    BaseTemperature,
    BasePressure
  }
};
</script>
