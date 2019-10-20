<template>
  <div class="Home">
    <div class="Home__cards-row">
      <Card
        v-for="(city, i) in weatherCitiesInfo"
        :key="city.id"
        :title="`${city.name}, ${city.country}`"
        bottomText="Updated at 02:48:27 PM"
      >
        <BaseTemperature :temperature="city.temp" />
        <template v-if="i === 1" slot="footer">
          <div class="Home__cards-footer">
            <BaseHumidity :humidity="city.humidity" />
            <BasePressure :pressure="city.pressure" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import {
  BaseTemperature,
  BasePressure,
  BaseHumidity
} from "@/components/atoms";
import { Card } from "@/components/molecules";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    BaseTemperature,
    BasePressure,
    BaseHumidity,
    Card
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
      weatherCitiesInfo: "weather/weatherCitiesInfo"
    })
  },
  methods: {
    ...mapActions({
      fetchCitiesWeather: "weather/fetchCitiesWeather"
    })
  },
  mounted() {
    this.fetchCitiesWeather(this.cities);
  }
};
</script>

<style lang="scss" scoped>
.Home {
  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }

  &__cards-row {
    @media (min-width: 760px) {
      display: flex;
      align-items: center;
    }
  }
  &__cards-footer {
    display: flex;
    justify-content: space-around;
  }
}
</style>
