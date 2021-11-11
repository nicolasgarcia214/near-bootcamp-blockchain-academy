import {
  getCounter,
  resetCounter,
  decrementCounter,
  incrementCounter,
} from "..";

import { storage } from "near-sdk-as";

describe("The Counter Smart Contract implementation", () => {
  it("Should increase the counter", () => {
    incrementCounter(1);
    expect(getCounter()).toBe(1, "Tiene que ser Uno");
  });

  it("Should get the counter value", () => {
    expect(storage.getPrimitive<i32>("counter", 0)).toBe(getCounter());
  });

  it("Should decrease the counter", () => {
    incrementCounter(1);
    decrementCounter(1);
    expect(getCounter()).toBe(0, "Tiene que ser cero");
  });

  it("Should reset the counter", () => {
    incrementCounter(1);
    resetCounter();
    expect(getCounter()).toBe(0, "Tiene que ser cero");
  });

  it("should increment two times and decrement back to zero", () => {
    incrementCounter(3);
    expect(getCounter()).toBe(3, "It should be equal to 3");
    incrementCounter(4);
    expect(getCounter()).toBe(7, "It should be equal to 7");
    decrementCounter(7);
    expect(getCounter()).toBe(0, "It should be equal to 0");
  });
});
