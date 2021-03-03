import http from 'k6/http';
import { check } from 'k6';

//Code Not Written for GET ALL USER----SO cannot get GCUID
var baseurl = '/chats/v1/chat/block/user/{gcuid}';

export default function blockUserStat(baseurl)
{
    var GCUID = '';
    var url = baseurl.concat(endpoint + GCUID + '/status');
    var res = http.get(url);
    check(res, {
        ['blockUserStat: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200,
      });
}
export default function blockUserStat_noGCUID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    check(res, {
        ['blockUserStat_noGCUID: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404,
      });
}
export default function blockUserStat_invGCUID(baseurl)
{
    var GCUID = '000000';
    var url = baseurl.concat(endpoint + GCUID + '/status');
    var res = http.get(url);
    check(res, {
        ['blockUserStat_invGCUID: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404,
      });
}
export default function blockUserStat_diffMthod(baseurl)
{
    var GCUID = '';
    var url = baseurl.concat(endpoint + GCUID + '/status');
    var res = http.get(url);
    check(res, {
        ['blockUserStat_diffMthod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405,
      });
}