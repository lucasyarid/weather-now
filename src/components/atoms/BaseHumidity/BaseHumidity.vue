<template>
  <div class="BaseHumidity">
    <div class="BaseHumidity__title">
      Humidity
    </div>
    <div class="BaseHumidity__value">
      {{ humidity }}<span class="BaseHumidity__scale">%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHumidity",
  props: {
    humidity: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseHumidity {
  color: $color-darker;
  text-align: center;
  &__title {
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 5px;
    font-weight: 100;
  }
  &__value {
    font-size: 21px;
  }
  &__scale {
    font-size: 12px;
  }
}
</style>
