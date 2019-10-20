import { shallowMount } from "@vue/test-utils";
import TemperatureCard from "./TemperatureCard";

describe("TemperatureCard", () => {
  const WRAPPER = shallowMount(TemperatureCard);

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
