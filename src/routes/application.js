const express = require('express');
const router = express.Router();
const process = require('process');
const os = require('os');
const logger = require('../utils/logger');
const cluster = require('cluster');
// const errorRouteHandler = require('../errors/routeHandler');

router.post('/formtest', function (req, res) {
    const query = req.query;
    console.log('req.query : ' + JSON.stringify(req.query));
    console.log('req.body : ' + JSON.stringify(req.body));
    res.send(req.body);
});

// 메모리 체크
router.get('/memoryUsage', function (req, res) {
    let result = process.memoryUsage();
    result.totalmem = os.totalmem();
    result.freemem = os.freemem();
    logger.info('os resource info : ' + result);
    res.send(result);
});

// 프로세스 상세 정보
router.get('/processInfo', function (req, res) {
    res.send('process id : [' + process.pid + '], cluster id : [' + cluster.worker.id + ']');
});

module.exports = router;