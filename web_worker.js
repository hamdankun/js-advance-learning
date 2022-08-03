const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');


if (isMainThread) {

} else {
    const worker = new Worker('async.js');
    worker.postMessage("Hello Broww");
}