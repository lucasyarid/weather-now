import { shallowMount } from "@vue/test-utils";
import BaseCard from "./BaseCard";

describe("BaseCard", () => {
  const WRAPPER = shallowMount(BaseCard);

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
