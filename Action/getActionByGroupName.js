import http from 'k6/http';
import { check } from 'k6';
import { getActionGroupName } from "./getAllAction.js";

//*****************
//DELETE AN ACTION*
//*****************

var endpoint = '/action/v1/action/grouped/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getActionByGroupName(baseurl);
}

export function getActionByGroupName(baseurl)
{
    var actionGroupName = getActionGroupName(baseurl);
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionByGroupName,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionByGroupName: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getActionByGroupName_diffMethod(baseurl)
{
    var actionGroupName = getActionGroupName(baseurl);
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionByGroupName_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionByGroupName_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getActionByGroupName_invGroupName(baseurl)
{
    var actionGroupName = 'ABCDE';
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionByGroupName_invGroupName,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionByGroupName_invGroupName: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404
        });
}