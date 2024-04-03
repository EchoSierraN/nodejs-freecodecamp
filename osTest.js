const os = require("os");
const path = require("path");

// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOs);

// const sep = path.sep;
const filePath = path.join("\\content/", "\\subfolder\\", "\\test.txt");
console.log(filePath);
console.log(path.basename(filePath));
