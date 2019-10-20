import { shallowMount } from "@vue/test-utils";
import Card from "./Card";

describe("Card", () => {
  const WRAPPER = shallowMount(Card);

  test("Componente existe", () => {
    expect(WRAPPER.exists()).toBe(true);
  });

  test("Componente não alterado", () => {
    expect(WRAPPER.html()).toMatchSnapshot();
  });
});
