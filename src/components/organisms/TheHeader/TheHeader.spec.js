import { shallowMount } from "@vue/test-utils";
import TheHeader from "./TheHeader";

describe("TheHeader", () => {
  const WRAPPER = shallowMount(TheHeader);

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
