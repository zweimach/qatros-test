/**
 * @param {number} n The upper bound
 * @returns {string[]} An array of string containing 1 to `n`, but for multiples
 * of 3 substitute with "Qat" instead of the number, for multiples of 5
 * substitute with "Ros" and for numbers which are multiples of both 3 and 5
 * substitute with "QatRos".
 */
function qatRos(n = 100) {
  /** @type {string[]} */
  let result = [];

  for (const i of [...Array(n + 1).keys()].slice(1)) {
    const qat = i % 3 == 0 ? "Qat" : "";
    const ros = i % 5 == 0 ? "Ros" : "";

    result.push(qat + ros || i.toString());
  }
  return result;
}

module.exports = qatRos;
