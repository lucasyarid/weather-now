<template>
  <div class="Home">
    <div class="Home__cards-row">
      <TemperatureCard
        v-for="(city, i) in weatherCitiesInfo"
        :key="city.id"
        :title="`${city.name}, ${city.country}`"
        :temperature="city.temp"
        :humidity="city.humidity"
        :pressure="city.pressure"
        :updatedAt="updatedTime"
        :isExpanded="i === 1"
        :is-loading="isLoading"
        :has-error="hasError"
        @tryAgain="getCitiesWeather"
      />
    </div>
  </div>
</template>

<script>
import { TemperatureCard } from "@/components/molecules";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    TemperatureCard
  },
  data() {
    return {
      cities: [
        {
          id: 3421319,
          name: "Nuuk"
        },
        {
          id: 3445709,
          name: "Urubici"
        },
        {
          id: 184736,
          name: "Nairobi"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      weatherCitiesInfo: "weather/weatherCitiesInfo",
      updatedTime: "weather/updatedTime",
      isLoading: "weather/isLoading",
      hasError: "weather/hasError"
    })
  },
  methods: {
    ...mapActions({
      citiesWeather: "weather/citiesWeather"
    }),
    getCitiesWeather() {
      const citiesIds = this.cities.map(city => city.id).join(",");
      this.citiesWeather(citiesIds);
    }
  },
  mounted() {
    this.getCitiesWeather();
  }
};
</script>

<style lang="scss" scoped>
.Home {
  width: 100%;
  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }

  &__cards-row {
    display: flex;
    flex-direction: column;
    @media (min-width: 760px) {
      flex-direction: row;
      align-items: center;
      margin: 0 auto;
    }
  }
}
</style>
