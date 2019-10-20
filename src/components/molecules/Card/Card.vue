<template>
  <div class="Card">
    <div v-if="title" class="Card__title">
      {{ title }}
    </div>
    <div class="Card__content">
      <slot />
    </div>
    <div class="Card__footer">
      <slot name="footer" />
      <div class="Card__bottom-text">{{ bottomText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: ""
    },
    bottomText: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.Card {
  box-shadow: 0px 0px 5px 0px $color-box-shadow;
  margin: 20px;
  background-color: white;
  border-radius: 5px;
  @media (min-width: 768px) {
    max-width: 300px;
  }
  &__title,
  &__content,
  &__footer {
    padding: 15px;
    text-align: center;
    color: $color-darker;
  }
  &__title {
    border-bottom: 1px solid $color-light;
  }
  &__footer {
    background-color: $color-xlight;
  }
  &__bottom-text {
    margin-top: 10px;
    font-size: 10px;
  }
}
</style>
