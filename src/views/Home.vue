<template>
  <div class="home">
    <BaseTemperature :temperature="-4" />
    <BasePressure :pressure="892" />
    <BaseHumidity :humidity="75" />
    <Card title="Nuuk, GL" bottomText="Updated at 02:48:27 PM">
      conteúdo
      <template slot="footer">
        footer
      </template>
    </Card>
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
  name: "home",
  components: {
    BaseTemperature,
    BasePressure,
    BaseHumidity,
    Card
  }
};
</script>
