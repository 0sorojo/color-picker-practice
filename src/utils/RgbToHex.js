const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const RgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export default RgbToHex;
