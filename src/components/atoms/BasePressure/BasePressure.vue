<template>
  <div class="BasePressure">
    <div class="BasePressure__title">
      Pressure
    </div>
    <div class="BasePressure__value">
      {{ pressure }}<span class="BasePressure__scale">hPa</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePressure",
  props: {
    pressure: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.BasePressure {
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
