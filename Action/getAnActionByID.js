import http from 'k6/http';
import { check } from 'k6';
import { getActionID } from "./getAllAction.js";

//**************************
//GET THE PARTICULAR ACTION*
//**************************

var endpoint = '/action/v1/action/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getActionByID(baseurl);
}

export function getActionByID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var actionID = getActionID(baseurl);
    var res = http.get(url + actionID);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionByID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionByID: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getActionByID_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var actionID = getActionID(baseurl);
    var res = http.put(url + actionID);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionByID_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionByID_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getActionByID_invActionID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var actionID = 'AJDHH';
    var res = http.get(url + actionID);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionByID_invActionID,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionByID_invActionID: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404
        });
}