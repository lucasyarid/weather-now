<template>
  <div class="Home">
    <div class="Home__cards-row">
      <Card title="Nuuk, GL" bottomText="Updated at 02:48:27 PM">
        <BaseTemperature :temperature="-4" />
      </Card>
      <Card title="Urubici, BR" bottomText="Updated at 02:48:27 PM">
        <BaseTemperature :temperature="19" />
        <template slot="footer">
          <div class="Home__cards-footer">
            <BaseHumidity :humidity="75" />
            <BasePressure :pressure="892" />
          </div>
        </template>
      </Card>
      <Card title="Nairobi, KE" bottomText="Updated at 02:48:27 PM">
        <BaseTemperature :temperature="31" />
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

export default {
  name: "Home",
  components: {
    BaseTemperature,
    BasePressure,
    BaseHumidity,
    Card
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
