/**
 * @param {string} str A string of space delimited numbers
 * @returns {string} A message containing one different number
 */
function findDifference(str) {
  const withPos = str
    .split(" ")
    .map((x) => +x)
    .map((x, i) => ({ pos: i, val: x }));
  const evens = withPos.filter((x) => !(x.val & 1));
  const odds = withPos.filter((x) => x.val & 1);
  const ordinality = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eight",
    "ninth",
    "tenth",
  ];
  const isOdd = odds.length < evens.length;
  const [{ pos }] = isOdd ? odds : evens;
  /** @type {(is: boolean) => string} */
  const oddOrEven = (is) => (is ? "odd" : "even");

  return `${pos + 1}, ${ordinality[pos]} number is ${oddOrEven(
    isOdd
  )}, while the rest of the numbers are ${oddOrEven(!isOdd)}`;
}

module.exports = findDifference;
