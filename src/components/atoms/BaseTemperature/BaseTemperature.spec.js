import { shallowMount } from "@vue/test-utils";
import BaseTemperature from "./BaseTemperature";

describe("BaseTemperature", () => {
  const WRAPPER = shallowMount(BaseTemperature, {
    propsData: {
      temperature: -15
    }
  });

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Cor da temperatura", () => {
    WRAPPER.setProps({ temperature: -15 });
    expect(WRAPPER.vm.BaseTemperatureColor).toBe("BaseTemperature--blue");

    WRAPPER.setProps({ temperature: 10 });
    expect(WRAPPER.vm.BaseTemperatureColor).toBe("BaseTemperature--orange");

    WRAPPER.setProps({ temperature: 30 });
    expect(WRAPPER.vm.BaseTemperatureColor).toBe("BaseTemperature--red");
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
