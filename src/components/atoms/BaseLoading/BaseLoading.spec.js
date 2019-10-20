import { shallowMount } from "@vue/test-utils";
import BaseLoading from "./BaseLoading";

describe("BaseLoading", () => {
  const WRAPPER = shallowMount(BaseLoading);

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
