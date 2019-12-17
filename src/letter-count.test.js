import { getLetterCount } from "./letter-count";

describe("get letter count", () => {
  it("should return an empty obj when passed an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).toEqual(expected);
  });

  it("should return the correct letter count for a word with only one of each letter", () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount("cat");
    expect(actual).toEqual(expected);
  });

  it("should return correct letter count for a word with more than one of each letter", () => {
    const expected = { w: 1, h: 1, a: 1, t: 3 };
    const actual = getLetterCount("whattt");
    console.log(actual);
    expect(actual).toEqual(expected);
  });
});
