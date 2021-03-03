import http from 'k6/http';
import { check } from 'k6';
import { getActionID } from "./getAllAction.js";

//*****************
//DELETE AN ACTION*
//*****************

var endpoint = '/action/v1/action/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    deleteActionByID(baseurl);
}

export function deleteActionByID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var actionID = getActionID(baseurl);
    var res = http.del(url + actionID);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionByID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionByID: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function deleteActionByID_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var actionID = getActionID(baseurl);
    var res = http.put(url + actionID);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionByID_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionByID_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function deleteActionByID_invActionID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var actionID = 'AJDHH';
    var res = http.del(url + actionID);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionByID_invActionID,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionByID_invActionID: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404
        });
}