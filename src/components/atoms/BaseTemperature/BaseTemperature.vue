<template>
  <div class="BaseTemperature" :class="BaseTemperatureColor">
    {{ temperature }}<span class="BaseTemperature__scale">°</span>
  </div>
</template>

<script>
export default {
  name: "BaseTemperature",
  props: {
    temperature: {
      type: Number,
      required: true
    },
    scale: {
      type: String,
      default: "Celsius"
    }
  },
  computed: {
    BaseTemperatureColor() {
      let color;
      if (this.temperature <= 5) color = "blue";
      if (this.temperature > 5 && this.temperature <= 25) color = "orange";
      if (this.temperature > 25) color = "red";

      return `BaseTemperature--${color}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseTemperature {
  font-size: 96px;
  display: flex;

  &--blue {
    color: $color-blue;
  }
  &--orange {
    color: $color-orange;
  }
  &--red {
    color: $color-red;
  }

  &__scale {
    font-size: 52px;
    transform: translateY(15%);
  }
}
</style>
