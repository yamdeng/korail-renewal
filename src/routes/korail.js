const express = require('express');
// const _ = require('lodash');
const router = express.Router();
const fs = require('fs');
// const logger = require('../utils/logger');

router.post('/requestMessage', function(req, res) {

    // type : postback
    // value : value 값에 따라 핸들링하는 구조인득
    // request : 추가 파라미터

    // const type = req.body.type;
    const value = req.body.value;
    const jsonFileName = value;
    let jsonString = fs.readFileSync(__dirname + '/json/' + jsonFileName + '.json', 'utf8');
    let result = JSON.parse(jsonString);
    res.send(result);
    
});

module.exports = router;
