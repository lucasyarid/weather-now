<template>
  <div class="home">
    <BaseTemperature :temperature="-4" />
    <BasePressure :pressure="892" />
    <BaseHumidity :humidity="75" />
  </div>
</template>

<script>
import {
  BaseTemperature,
  BasePressure,
  BaseHumidity
} from "@/components/atoms";
export default {
  name: "home",
  components: {
    BaseTemperature,
    BasePressure,
    BaseHumidity
  }
};
</script>
