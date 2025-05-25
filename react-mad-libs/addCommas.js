function addCommas(num) {
  num += "";
  const x = num.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? "." + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  const newStr = `${x1 + x2}`;
  return newStr;
}

// addcommas made with Stackoverflow: https://stackoverflow.com/questions/6392102/add-commas-to-javascript-output
module.exports = addCommas;
