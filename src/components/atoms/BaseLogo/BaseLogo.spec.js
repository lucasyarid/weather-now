import { shallowMount } from "@vue/test-utils";
import BaseLogo from "./BaseLogo";

describe("BaseLogo", () => {
  const WRAPPER = shallowMount(BaseLogo);

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
