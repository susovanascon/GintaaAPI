import http from 'k6/http';
import { check } from 'k6';

//**************************
//CREATE/ADD AN ACTION GROUP*
//**************************

var endpoint = '/action/v1/action/group';

var body = {
    "description": "string",
    "name": "string"
  }
export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    createActionGroup(baseurl);
}

export function createActionGroup(baseurl)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    body.description = "Give user rating"
    body.name = "RATING"
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });

    // console.log(res.status + res.body);
    console.log(`,${url},` +' createActionGroup,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createActionGroup: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function createActionGroup_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    body.description = "Give user rating"
    body.name = "RATING"
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });

    // console.log(res.status + res.body);
    console.log(`,${url},` +' createActionGroup_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createActionGroup_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}