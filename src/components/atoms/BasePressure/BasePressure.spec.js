import { shallowMount } from "@vue/test-utils";
import BasePressure from "./BasePressure";

describe("BasePressure", () => {
  const WRAPPER = shallowMount(BasePressure, {
    propsData: {
      pressure: 892
    }
  });

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
