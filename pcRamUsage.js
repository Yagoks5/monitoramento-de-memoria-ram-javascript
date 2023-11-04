const { stat } = require("node:fs");
const os = require("node:os");

setInterval(() => {
  const { arch, platform, totalmem, freemem, cpus } = os;
  const tRam = totalmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;
  const usage = (fRam / tRam) * 100;

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRam: `${parseInt(tRam)} MB`,
    FreeRam: `${parseInt(fRam)} MB`,
    Usage: `${usage.toFixed(2)} %`,
    //   Cpus: cpus(),
  };
  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);
