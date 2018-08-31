const express = require('express');
// const _ = require('lodash');
const router = express.Router();
const fs = require('fs');
// const logger = require('../utils/logger');

router.post('/requestMessage', function(req, res) {
    const query = req.body.message.template.query;
    const jsonFileName = query;
    let jsonString = fs.readFileSync(
        __dirname + '/json/' + jsonFileName + '.json',
        'utf8'
    );
    let result = JSON.parse(jsonString);
    res.send(result);
});

module.exports = router;
