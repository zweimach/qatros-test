/**
 * @param {number} x The length
 * @param {number} y The width
 * @param {number} z The height
 * @returns {number} The volume in liters
 */
function cubicToLiter(x, y, z) {
  return (x * y * z) / 1000;
}

module.exports = cubicToLiter;
