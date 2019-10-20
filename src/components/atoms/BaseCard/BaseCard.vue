<template>
  <div class="BaseCard">
    <div v-if="title" class="BaseCard__title">
      {{ title }}
    </div>
    <div class="BaseCard__content">
      <slot />
    </div>
    <div class="BaseCard__footer">
      <slot name="footer" />
      <div class="BaseCard__bottom-text">{{ bottomText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
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
.BaseCard {
  box-shadow: 0px 0px 5px 0px $color-box-shadow;
  margin: 40px;
  background-color: white;
  border-radius: 5px;
  height: fit-content;

  @media (min-width: 760px) {
    margin: 20px;
    min-width: 300px;
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
