const { stat, cp } = require("node:fs");
const os = require("node:os");
setInterval(() => {
  const { arch, platform, totalmem, freemem, cpus, type } = os;
  const tRam = totalmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;
  const usage = (fRam / tRam) * 100;
  const cpuModel = cpus()[0].model;
  const cpuSpeed = cpus()[0].speed / 1000;
  const osType = type();

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRam: `${parseInt(tRam)} MB`,
    FreeRam: `${parseInt(fRam)} MB`,
    Usage: `A porcentagem de RAM livre no seu computador é de:  ${usage.toFixed(
      2
    )} %`,
    Cpu: `O modelo de seu cpu é: ${cpuModel}`,
    CpuSpeed: `A velocidade do seu cpu é de ${cpuSpeed} GHz`,
    OSTYPE: osType,
  };
  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);
