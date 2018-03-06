const cluster = require('cluster');
const { cpus } = require('os');

const Clusters = function Clusters() {
    this.cpus = cpus();
    this.init = function init() {
        if(cluster.isMaster) {
            this.cpus.forEach(() => cluster.fork());
            cluster.on('listening', (worker) => {
                console.log(`Cluster ${worker.process.pid} connected.`)
            });
            cluster.on('disconnect', (worker) => {
                console.log(`Cluster ${worker.process.pid} disconnected.`)
            });
            cluster.on('exit', (worker) => {
                console.log(`Cluster ${worker.process.pid} exited.`)
                cluster.fork();
            })

        } else {
            require('./server');
        }
    }
};

module.exports = new Clusters().init();