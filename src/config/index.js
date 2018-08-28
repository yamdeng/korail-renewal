'use strict';

const config = {};

// API prefix URL
config.API_PREFIX_URL = '/api';

// 로그파일 포맷
config.LOGFILE_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSS';

// 로그파일 이름
config.LOG_FILE_NAME = 'app.log';

// 로그파일 max size
config.LOG_MAX_FILE_SIZE = 10485760;

// 로그파일 rolling 기준 파일 갯수
config.LOG_MAX_FILE_COUNT = 3;

/*

    메인_처음
    교통_즐겨찾기
    교통_경로_검색
    교통_시작
    교통_처음
    기차_여정_선택

*/

// component 맵핑 정보 : key 값은 프론트에서 요청한 값. value 값은 응답값으로 넘겨줄 값
config.COMPONENT_MAPPING_INFO = {
    '메인_처음' : '메인_처음',
    '교통_즐겨찾기' : '교통_즐겨찾기',
    '교통_경로_검색' : '교통_경로_검색',
    '교통_시작' : '교통_시작',
    '교통_처음' : '교통_처음',
    '기차_여정_선택' : '기차_여정_선택',
};

module.exports = config;
