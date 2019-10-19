import { shallowMount } from "@vue/test-utils";
import BaseHumidity from "./BaseHumidity";

describe("BaseHumidity", () => {
  const WRAPPER = shallowMount(BaseHumidity, {
    propsData: {
      humidity: 70
    }
  });

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
