const express = require('express');
// const _ = require('lodash');
const router = express.Router();
const fs = require('fs');
// const logger = require('../utils/logger');

router.post('/v1/webchat', function (req, res) {
    const query = req.body.message.template.query;
    let jsonFileName = query;
    if (query === '/trans/auto/keyword') {
        jsonFileName = '1차검색';
    } else if (query === '/trans/search/address') {
        jsonFileName = '2차검색';
    }
    let jsonString = fs.readFileSync(
        __dirname + '/json/' + jsonFileName + '.json',
        'utf8'
    );
    let result = JSON.parse(jsonString);
    res.send(result);
});

module.exports = router;