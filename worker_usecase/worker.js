const { parentPort, workerData } = require("worker_threads");

const { getFibonaciNumber } = require("./fibonaci.js");

parentPort.postMessage(getFibonaciNumber(workerData.num))
