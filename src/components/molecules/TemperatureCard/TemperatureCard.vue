<template>
  <div class="TemperatureCard">
    <BaseCard :title="title" :bottomText="`Updated at ${updatedAt}`">
      <BaseLoading v-if="isLoading" />
      <div v-else-if="hasError" class="TemperatureCard__error">
        Something went wrong
        <button class="TemperatureCard__button" @click="$emit('tryAgain')">
          Try Again
        </button>
      </div>
      <template v-else>
        <BaseTemperature :temperature="temperature" />
        <template v-if="isExpanded" slot="footer">
          <div class="TemperatureCard__footer">
            <BaseHumidity :humidity="humidity" />
            <BasePressure :pressure="pressure" />
          </div>
        </template>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import {
  BaseCard,
  BaseTemperature,
  BasePressure,
  BaseHumidity,
  BaseLoading
} from "@/components/atoms";

export default {
  name: "TemperatureCard",
  components: {
    BaseCard,
    BaseTemperature,
    BasePressure,
    BaseHumidity,
    BaseLoading
  },
  props: {
    title: {
      type: String,
      default: "loading..."
    },
    temperature: {
      type: Number,
      default: 0
    },
    humidity: {
      type: Number,
      default: 0
    },
    pressure: {
      type: Number,
      default: 0
    },
    updatedAt: {
      type: String,
      default: ""
    },
    isExpanded: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.TemperatureCard {
  &__error {
    color: $color-red;
  }

  &__button {
    display: block;
    margin: 10px auto;
    border: 2px solid $color-darker;
    color: $color-darker;
    border-radius: 20px;
    padding: 10px 20px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: $color-darker;
      color: white;
    }
    &:focus,
    &:active {
      outline: none;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-around;
  }
}
</style>
