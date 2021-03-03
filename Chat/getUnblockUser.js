import http from 'k6/http';
import { check } from 'k6';

//Code Not Written for GET ALL USER----SO cannot get GCUID
var baseurl = '/chats/v1/chat/unblock/user/{gcuid}';

export default function unblockUser(baseurl)
{
    var GCUID = '';
    var url = baseurl.concat(endpoint + GCUID);
    var res = http.get(url);
    check(res, {
        ['unblockUser: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200,
      });
}
export default function unblockUser_noGCUID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    check(res, {
        ['unblockUser_noGCUID: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404,
      });
}
export default function unblockUser_invGCUID(baseurl)
{
    var GCUID = '000000';
    var url = baseurl.concat(endpoint + GCUID);
    var res = http.get(url);
    check(res, {
        ['unblockUser_invGCUID: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404,
      });
}
export default function unblockUser_diffMthod(baseurl)
{
    var GCUID = '';
    var url = baseurl.concat(endpoint + GCUID);
    var res = http.get(url);
    check(res, {
        ['unblockUser_diffMthod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405,
      });
}