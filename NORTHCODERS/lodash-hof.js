const identityModule = require("../katas/identity")
jest.spyOn(identityModule, "identity")

const times = require("../katas/5-times");

describe("times()", () => {
  test.only("it should return an array", () => {
    expect(times()).toEqual([]);
  })
  test("if passed with only 1 number it should return that number as a value", () => {
    expect(times(1)).toBe([1])
  });

  test.skip("passed callback function is invoked", () => {
    const mockFn = jest.fn();
    times([1], mockFn)

    expect(mockFn).toHaveBeenCalled()
  });

  test.skip("passed callback function is invoked for each element in an array", () => {
    const mockFn = jest.fn();
    times([1, 2, 3], mockFn)

    expect(mockFn).toHaveBeenCalledTimes(3)
  });

  test.skip("passed callback function is invoked with a single value which is the current element", () => {
    const mockFn = jest.fn();
    times([1], mockFn);

    expect(mockFn).toHaveBeenCalledWith(1)
  });

  test.skip("if no iteratee function has been passed, it should defaults to identity function", () => {
    times([1, 2, 3]);

    expect(identityModule.identity).toHaveBeenCalled();
  });

  test.skip("if paseed with an array and a callback function, it should return the sum of the element", () => {
    const array = [4, 2, 8, 6];

    expect(times(array, (num) => {
      let accumulator = 0;
      accumulator += num
      return accumulator
    })).toEqual(20)
  });
})